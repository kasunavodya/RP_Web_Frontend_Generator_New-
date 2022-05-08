import React, { Component } from 'react'
import Axios from 'axios';
import SideNavBar from '../navBar/sideNavBar';
import step1 from '../../assets/img/1.png';
import step2 from '../../assets/img/2.png';
import step3 from '../../assets/img/3.png';
import step4 from '../../assets/img/4.png';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialStates = {
    formBackgroundColor: '',
    formBorderColor: '',
    formBorderSize: '',
    formBorderPatten: '',
    headerFontSize: '',
    headerBold: '',
    headerFontColor: '',
    labelFontSize: '',
    labelFontColor: '',
    inputBorderColor: '',
    inputBorderSize: '',
    inputBorderPattern: '',
    inputBorderRadius: '',
    buttonBackgroundColor: '',
    buttonFontColor: '',
    buttonBorderRadius: '',
    labelFontSizeError: '',
}

export default class addStylesPage extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //form validations
    validate = () => {
        let isError = false;
        const errors = {
            labelFontSizeError: '',
        };

        //check product name validation
        if (this.state.labelFontSize.length > 5) {
            isError = true;
            errors.labelFontSizeError = "Needs to be less than 3 characters";
        }

        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            });
        }

        return isError;
    }

    onSubmit(e) {
        e.preventDefault();

        //validate data before submitting to the db 
        const err = this.validate();
        if (!err) {

            let templateStyle = {
                formBackgroundColor: this.state.formBackgroundColor,
                formBorderColor: this.state.formBorderColor,
                formBorderSize: this.state.formBorderSize,
                formBorderPatten: this.state.formBorderPatten,
                headerFontSize: this.state.headerFontSize,
                headerBold: this.state.headerBold,
                headerFontColor: this.state.headerFontColor,
                labelFontSize: this.state.labelFontSize,
                labelFontColor: this.state.labelFontColor,
                inputBorderColor: this.state.inputBorderColor,
                inputBorderSize: this.state.inputBorderSize,
                inputBorderPattern: this.state.inputBorderPattern,
                inputBorderRadius: this.state.inputBorderRadius,
                buttonBackgroundColor: this.state.buttonBackgroundColor,
                buttonFontColor: this.state.buttonFontColor,
                buttonBorderRadius: this.state.buttonBorderRadius
            }
            Axios.post('http://localhost:3001/templateStyle/addTemplateStyle', templateStyle)
                .then(response => {
                    //alert('Style Details Added Successfully');
                    toast.success('Style Details Added Successfully');
                }).catch(error => {
                    alert(error.message);
                })

        }
    }

    //demo button method
    demo = () => {

        alert('Are you sure you want system recommended styles?');

        //setState
        this.setState({
            formBackgroundColor: "#a6bde3"
        })

        this.setState({
            formBorderColor: "#000000"
        })

        this.setState({
            formBorderSize: "1px"
        })

        this.setState({
            formBorderPatten: "solid"
        })

        this.setState({
            headerFontSize: "h1"
        })

        this.setState({
            headerBold: "bold"
        })

        this.setState({
            headerFontColor: "#000000"
        })

        this.setState({
            labelFontSize: "16px"
        })

        this.setState({
            labelFontColor: "#000000"
        })

        this.setState({
            inputBorderColor: "#939599"
        })

        this.setState({
            inputBorderSize: "2px"
        })

        this.setState({
            inputBorderPattern: "solid"
        })

        this.setState({
            inputBorderRadius: "7px"
        })

        this.setState({
            buttonBackgroundColor: "#4348e8"
        })

        this.setState({
            buttonFontColor: "#ffffff"
        })

        this.setState({
            buttonBorderRadius: "7px"
        })

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
                                        <li class="breadcrumb-item text-sm text-white active" aria-current="page">Add Styles</li>
                                    </ol>
                                    <h6 class="font-weight-bolder text-white mb-0">Add Styles</h6>
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
                                    <div class="card">
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder">
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
                                </div>
                            </div><br /><br /><br />
                            <center>
                                <div class="card bg-light text-dark" style={{ width: '1000px' }}>
                                    <div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                        Click the <b>'Submit Default Styles'</b> button to submit the styles recommended by the system. <br />
                                        Or <br />select the your own styles and click the <b>'Submit'</b> button.
                                    </div>
                                    <div class="card-body">
                                        <ToastContainer />
                                        <div class="container">
                                            <form class="form-inline" onSubmit={this.onSubmit}>
                                                <div class="row">
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <p><b>Styling Form - </b></p>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Background Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="formBackgroundColor"
                                                            name="formBackgroundColor"
                                                            value={this.state.formBackgroundColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                        />
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Border Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="formBorderColor"
                                                            name="formBorderColor"
                                                            value={this.state.formBorderColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                        />
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="pwd">Other Border Styles</label>
                                                        <br />
                                                        <select name="formBorderSize" id="formBorderSize" onChange={this.onChange} style={{ width: '40%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="1px">&nbsp;&nbsp;1px</option>
                                                            <option value="2px">&nbsp;&nbsp;2px</option>
                                                            <option value="3px">&nbsp;&nbsp;3px</option>
                                                            <option value="4px">&nbsp;&nbsp;4px</option>
                                                        </select>&nbsp;&nbsp;
                                                        <select name="formBorderPatten" id="formBorderPatten" onChange={this.onChange} style={{ width: '50%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="solid">&nbsp;&nbsp;Solid</option>
                                                            <option value="inset">&nbsp;&nbsp;Inset</option>
                                                            <option value="outset">&nbsp;&nbsp;Outset</option>
                                                            <option value="groove">&nbsp;&nbsp;Groove</option>
                                                            <option value="ridge">&nbsp;&nbsp;Ridge</option>
                                                        </select>
                                                    </div><br />
                                                    <br /><br /><br /><hr /><br />
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <p><b>Styling Header - </b></p>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Font Size (px)</label><br />
                                                        <select name="headerFontSize" id="headerFontSize" value={this.state.headerFontSize} onChange={this.onChange} style={{ width: '80%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="h1">&nbsp;&nbsp;Header1 - (h1)</option>
                                                            <option value="h2">&nbsp;&nbsp;Header2 - (h2)</option>
                                                            <option value="h3">&nbsp;&nbsp;Header3 - (h3)</option>
                                                            <option value="h4">&nbsp;&nbsp;Header4 - (h4)</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="pwd">Bold/Unbold</label><br />
                                                        <select name="headerBold" id="headerBold" value={this.state.headerBold} onChange={this.onChange} style={{ width: '80%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="b">&nbsp;&nbsp;Bold</option>
                                                            <option value="non bold">&nbsp;&nbsp;Non Bold</option>
                                                        </select>
                                                        <br /><br /><br />
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="pwd">Font Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="headerFontColor"
                                                            name="headerFontColor"
                                                            value={this.state.headerFontColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                        /><br />
                                                    </div>
                                                    <br /><hr /><br />
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <p><b>Styling Label - </b></p>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Font Size (px)</label><br />
                                                        <select name="labelFontSize" id="labelFontSize" value={this.state.labelFontSize} onChange={this.onChange} style={{ width: '80%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="15px">&nbsp;&nbsp;15px</option>
                                                            <option value="16px">&nbsp;&nbsp;16px</option>
                                                            <option value="17px">&nbsp;&nbsp;17px</option>
                                                            <option value="18px">&nbsp;&nbsp;18px</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="pwd">Font Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="labelFontColor"
                                                            name="labelFontColor"
                                                            value={this.state.labelFontColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                        /><br /><br /><br />
                                                    </div>
                                                    <br /><hr /><br />
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <p><b>Styling Input Field - </b></p>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Border Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="inputBorderColor"
                                                            name="inputBorderColor"
                                                            value={this.state.inputBorderColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                        />
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="pwd">Other Border Styles</label>
                                                        <br />
                                                        <select name="inputBorderSize" id="inputBorderSize" value={this.state.inputBorderSize} onChange={this.onChange} style={{ width: '40%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="1px">&nbsp;&nbsp;1px</option>
                                                            <option value="2px">&nbsp;&nbsp;2px</option>
                                                            <option value="3px">&nbsp;&nbsp;3px</option>
                                                            <option value="4px">&nbsp;&nbsp;4px</option>
                                                        </select>&nbsp;&nbsp;
                                                        <select name="inputBorderPattern" id="inputBorderPattern" value={this.state.inputBorderPattern} onChange={this.onChange} style={{ width: '50%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="solid">&nbsp;&nbsp;Solid</option>
                                                            <option value="inset">&nbsp;&nbsp;Inset</option>
                                                            <option value="outset">&nbsp;&nbsp;Outset</option>
                                                            <option value="groove">&nbsp;&nbsp;Groove</option>
                                                            <option value="ridge">&nbsp;&nbsp;Ridge</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Border Radius</label><br />
                                                        <select name="inputBorderRadius" id="inputBorderRadius" value={this.state.inputBorderRadius} onChange={this.onChange} style={{ width: '80%', height: '50%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="5px">&nbsp;&nbsp;5px</option>
                                                            <option value="6px">&nbsp;&nbsp;6px</option>
                                                            <option value="7px">&nbsp;&nbsp;7px</option>
                                                            <option value="8px">&nbsp;&nbsp;8px</option>
                                                            <option value="9px">&nbsp;&nbsp;9px</option>
                                                            <option value="10px">&nbsp;&nbsp;10px</option>
                                                        </select><br /><br />
                                                    </div>
                                                    <br />
                                                    <br /><br /><br /><hr /><br />
                                                </div>
                                                <div class="row">
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <p><b>Styling Button - </b></p>
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Background Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="buttonBackgroundColor"
                                                            name="buttonBackgroundColor"
                                                            value={this.state.buttonBackgroundColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '50%', borderColor: '#e0dada' }}
                                                        />
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Font Color</label><br />
                                                        <input
                                                            type="color"
                                                            id="buttonFontColor"
                                                            name="buttonFontColor"
                                                            value={this.state.buttonFontColor}
                                                            onChange={this.onChange}
                                                            style={{ width: '30%', height: '50%', borderColor: '#e0dada' }}
                                                        />
                                                    </div>
                                                    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                        <label for="form">Button Border Radius</label><br />
                                                        <select name="buttonBorderRadius" id="buttonBorderRadius" value={this.state.buttonBorderRadius} onChange={this.onChange} style={{ width: '80%', height: '50%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                            <option value="5px">&nbsp;&nbsp;5px</option>
                                                            <option value="6px">&nbsp;&nbsp;6px</option>
                                                            <option value="7px">&nbsp;&nbsp;7px</option>
                                                            <option value="8px">&nbsp;&nbsp;8px</option>
                                                            <option value="9px">&nbsp;&nbsp;9px</option>
                                                            <option value="10px">&nbsp;&nbsp;10px</option>
                                                        </select><br /><br />
                                                    </div>
                                                </div><br />
                                                <div class="col-12 text-end">
                                                    <button type="submit" className="btn btn-primary" id="defaultBtn" onClick={this.demo}>Submit Default Styles</button>
                                                    &nbsp;&nbsp;&nbsp;OR &nbsp;&nbsp;&nbsp;
                                                    <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </center>
                            <br />
                            <div class="col-12 text-end">
                                <a class="btn bg-gradient-dark mb-0" href="/convertXmltoJson"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Back</a>
                                &nbsp;&nbsp;&nbsp;
                                <a class="btn bg-gradient-dark mb-0" href="/displayResult">Next&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}