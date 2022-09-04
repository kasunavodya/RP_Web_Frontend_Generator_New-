/**
 * SCOPE    -   Display React code and output template
 * PAGE     -   displayResult.js
 * 
 * ================================================
 * CREATED BY :   H.M. Kasuni Navodya (IT19144986)
 */

import React, { Component } from 'react'
import SideNavBar from '../navBar/sideNavBar';
import step1 from '../../assets/img/1.png';
import step2 from '../../assets/img/2.png';
import step3 from '../../assets/img/3.png';
import step4 from '../../assets/img/4.png';
import '../../assets/css/textAreaStyle.css'

import sampleCode from '../../SampleCode/sampleCode.txt';
import ReactUI from './ReactUI.js';
import Axios from 'axios';

const initialStates = {
    "code": '',
    "json": {},
    "generatedCode": ''
}
export default class displayResultPage extends Component {

    constructor(props) {
        super(props);
        this.state = initialStates;
        this.generateCode = this.generateCode.bind(this);
    }

    //Fetch sample code and display code as a string
    //If the error continues change this to a method and bind in constructor.
    componentDidMount() {

        //  fetch(sampleCode)
        //      .then((res) => {
        //          return res.text();
        //      }).then((data) => {
        //          this.setState({ code: data.toString() });
        //      });

        Axios.get('http://localhost:3001/convertToJson/getTableStructure')
            .then(response => {
                this.setState({ json: response.data });
            })
            .catch((e) => {
                console.log('Error:', e);
                alert(e.message);
            });
    }

    generateCode() {
        let data = this.state.json;
        const keys = Object.keys(data);

        let tempObj = {};

        keys.forEach((key, index) => {
            tempObj = data[key];
        });;

        //console.log('DATA : ', tempObj[0].json);
        let jsonStruct = JSON.parse(tempObj[0].json);

        console.log('DATA 2: ', jsonStruct.Window.Grid);

        //Loop through list - Add more UI components here!
        let labelList = [];
        let buttonList = [];

        //Lets try to generalize the loop (grid/canvas/container)
        //Speak with Keshawa and decide what needs to be fixed!
        jsonStruct.Window.Grid.map(item => {
            labelList = item.Label;
            buttonList = item.Button;
        });

        //CODE GENERATION START - NEED OPTMIZATION
        //Drawback - All UI do not have forms - Have a tag in XML to determine if it is form/normal div!
        let code = '<div className="' + jsonStruct.Window.$.Title + '">' + '\n';
        code = code + '\t' + '<form style={{ }}>' + '\n';

        code = code + '\t\t' + '<div class="formContainer" style={{}}>' + '\n';
        code = code + '\t\t\t' + '<h1 style={{ }}>' + jsonStruct.Window.$.Title + '</h1><hr/>' + '\n';
        code = code + '\t\t' + '<div>' + '\n';

        code = code + '\t\t' + '<div class="container" style={{}}>' + '\n';
        //Label
        for (let i = 0; i < labelList.length; i++) {
            code = code + this.generateCodeForLabel(labelList[i].$.Content);
            code = code + this.generateCodeForInput(labelList[i].$.Content);
            code = code + '\t\t\t' + '<br /><br />' + '\n';
        }

        //Button
        for (let i = 0; i < buttonList.length; i++) {
            code = code + this.generateCodeForButton(buttonList[i].$.Content);
        }
        code = code + '\t\t\t' + '<br /><br /><br />' + '\n';
        code = code + '\t\t' + '<div>' + '\n';

        code = code + '\t' + '</form>' + '\n';
        code = code + '<div>';

        //Get the generated Code
        this.setState({ generatedCode: code });
    }

    //Code generation for label
    //Pass the style parameters as method params
    generateCodeForLabel(labelName) {
        let labelCode = '\t\t\t' + '<label style={{ }}>' + '\n';
        labelCode = labelCode + '\t\t\t\t' + '<b style={{ }}>' + labelName + '</b>' + '\n';
        labelCode = labelCode + '\t\t\t' + '</label>' + '\n';

        return labelCode;
    }

    //Code generation for input
    //Pass the style parameters as method params
    generateCodeForInput(labelName) {
        let inputCode = '\t\t\t' + '<input' + '\n';
        inputCode = inputCode + '\t\t\t\t' + 'type="text"' + '\n';
        inputCode = inputCode + '\t\t\t\t' + 'placeholder="Enter ' + labelName + '"' + '\n';
        inputCode = inputCode + '\t\t\t\t' + 'name="' + labelName + '"' + '\n';;
        inputCode = inputCode + '\t\t\t\t' + 'required' + '\n';
        inputCode = inputCode + '\t\t\t\t' + 'style={{ }}' + '\n';
        inputCode = inputCode + '\t\t\t' + '/>' + '\n';

        return inputCode;
    }

    //Code generation for Button
    //Pass the style parameters as method params
    generateCodeForButton(buttonName) {
        let buttonCode = '\t\t\t' + '<button type="submit" style={{ }}>' + buttonName + '</button>' + '\n';

        return buttonCode;
    }


    render() {
        return (
            <div>
                <body class="g-sidenav-show   bg-gray-100">
                    <div class="min-height-200 bg-primary position-absolute w-100"></div>
                    <SideNavBar />
                    <main class="main-content position-relative border-radius-lg ">
                        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                            <div class="container-fluid py-1 px-3">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                        <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="">Pages</a></li>
                                        <li class="breadcrumb-item text-sm text-white active" aria-current="page">Display Code & Result</li>
                                    </ol>
                                    <h6 class="font-weight-bolder text-white mb-0">Display Code & Result</h6>
                                </nav>
                            </div>
                        </nav>
                        <div class="container-fluid py-4">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card" style={{ flex: 1, backgroundColor: 'black' }}>
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder" style={{ color: 'white' }}>
                                                            XML to JSON
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step1} class="navbar-brand-img h-100" alt="step1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card" style={{ flex: 1, backgroundColor: 'black' }}>
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder" style={{ color: 'white' }}>
                                                            Add Styles
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step2} class="navbar-brand-img h-100" alt="step2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card" style={{ flex: 1, backgroundColor: 'black' }}>
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder" style={{ color: 'white' }}>
                                                            Display Result
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step3} class="navbar-brand-img h-100" alt="step3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card">
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder">
                                                            Download Code
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step4} class="navbar-brand-img h-100" alt="step4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><br /><br /><br /><br /><br />
                                <div class="row">
                                    <div class="col-sm-6">
                                        <center><div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                            Display React Code <br />
                                            <i><p style={{ fontSize: '14px', color: 'black', backgroundColor: "#afe0ed", marginBottom: '-1px' }}><b>(NOTE: If you want the code screen to be in light mode, click on the code screen.)</b></p></i>
                                        </div></center>
                                        {/* Added By Sanjay START */}
                                        <div>
                                            <button type="button" class="btn btn-success" style={{ color: 'black', marginBottom: '5px'}} onClick={this.generateCode}>Generate Code</button>
                                        </div>
                                        {/* Added By Sanjay END */}
                                        <div>
                                            <textarea id="xmlString" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" cols="55" rows="65" style={{ fontSize: 13, width: '100%', height: '530px' }} defaultValue={this.state.generatedCode}>
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <center><div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                            Display Result <br />
                                            <i><p style={{ fontSize: '13px', color: 'black', backgroundColor: "#afe0ed", marginBottom: '17px' }}></p></i>
                                        </div></center>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '320px', marginTop: '-531px' }}>
                                    <ReactUI />
                                </div>
                            </div>
                            <br />
                            <div class="col-12 text-end">
                                <a class="btn bg-gradient-dark mb-0" href="/preDefineStyles"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Back</a>
                                &nbsp;&nbsp;&nbsp;
                                <a class="btn bg-gradient-dark mb-0" href="/downloadCode">Next&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}
