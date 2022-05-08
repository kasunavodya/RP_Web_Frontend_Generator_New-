import React, { Component } from 'react'
import SideNavBar from '../navBar/sideNavBar';
import step1 from '../../assets/img/1.png';
import step2 from '../../assets/img/2.png';
import step3 from '../../assets/img/3.png';
import step4 from '../../assets/img/4.png';
import style1 from '../../assets/img/style1.jpg';
import style2 from '../../assets/img/style2.jpg';
import style3 from '../../assets/img/style3.jpg';
import style5 from '../../assets/img/style5.jpg';
import style6 from '../../assets/img/style6.jpg';
import '../../assets/css/preDefineStyles.css';

export default class preDefineStylesPage extends Component {

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
                                <br /><br /><br /><br /><br /><br />
                                <center>
                                    <div class="card bg-light text-dark" style={{ width: '1360px' }}>
                                        <div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                            Select the template style you prefer below and click the 'Submit' button. <br />
                                            (The style form will be updated automatically according to your template style selection.)
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="column">
                                                    <p>Template Style - 01</p>
                                                    <img src={style1} style={{ width: '100%' }} />
                                                </div>
                                                <div class="column">
                                                    <p>Template Style - 02</p>
                                                    <img src={style2} style={{ width: '100%' }} />
                                                </div>
                                                <div class="column">
                                                    <p>Template Style - 03</p>
                                                    <img src={style3} style={{ width: '100%' }} />
                                                </div>
                                                <div class="column">
                                                    <p>Template Style - 04</p>
                                                    <img src={style5} style={{ width: '100%' }} />
                                                </div>
                                                <div class="column">
                                                    <p>Template Style - 05</p>
                                                    <img src={style6} style={{ width: '100%' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <center>
                                            <div class="card bg-light text-dark" style={{ width: '800px', height: '550px' }}>
                                                <div class="card-body" style={{ backgroundColor: 'white' }}>
                                                    <div class="container">
                                                        <form class="form-inline" onSubmit={this.onSubmit}>
                                                            <h3>Style Form</h3><br />
                                                            <select name="templateStyle" id="templateStyle" style={{ width: '100%', height: '50px', borderColor: '#e0dada', borderRadius: '6px', backgroundColor: '#dce6df' }}>
                                                                <option disabled selected value>&nbsp;&nbsp;Select Template Style</option>
                                                                <option value="style1">&nbsp;&nbsp;Template Style - 01</option>
                                                                <option value="style2">&nbsp;&nbsp;Template Style - 02 </option>
                                                                <option value="style3">&nbsp;&nbsp;Template Style - 03</option>
                                                                <option value="style4">&nbsp;&nbsp;Template Style - 04</option>
                                                                <option value="style5">&nbsp;&nbsp;Template Style - 05</option>
                                                            </select><br /><br />
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
                                                                        style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                                    />
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="form">Border Color</label><br />
                                                                    <input
                                                                        type="color"
                                                                        id="formBorderColor"
                                                                        name="formBorderColor"
                                                                        style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                                    />
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="pwd">Other Border Styles</label>
                                                                    <br />
                                                                    <select name="formBorderSize" id="formBorderSize" style={{ width: '40%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                                        <option value="1px">&nbsp;&nbsp;1px</option>
                                                                        <option value="2px">&nbsp;&nbsp;2px</option>
                                                                        <option value="3px">&nbsp;&nbsp;3px</option>
                                                                        <option value="4px">&nbsp;&nbsp;4px</option>
                                                                    </select>&nbsp;&nbsp;
                                                                    <select name="formBorderPatten" id="formBorderPatten" style={{ width: '50%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
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
                                                                    <select name="headerFontSize" id="headerFontSize" style={{ width: '80%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                                        <option value="h1">&nbsp;&nbsp;Header1</option>
                                                                        <option value="h2">&nbsp;&nbsp;Header2 </option>
                                                                        <option value="h3">&nbsp;&nbsp;Header3</option>
                                                                        <option value="h4">&nbsp;&nbsp;Header4</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="pwd">Bold/Unbold</label><br />
                                                                    <select name="headerBold" id="headerBold" style={{ width: '80%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
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
                                                                    <select name="labelFontSize" id="labelFontSize" style={{ width: '80%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
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
                                                                        style={{ width: '30%', height: '38%', borderColor: '#e0dada' }}
                                                                    />
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="pwd">Other Border Styles</label>
                                                                    <br />
                                                                    <select name="inputBorderSize" id="inputBorderSize" style={{ width: '40%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                                        <option value="1px">&nbsp;&nbsp;1px</option>
                                                                        <option value="2px">&nbsp;&nbsp;2px</option>
                                                                        <option value="3px">&nbsp;&nbsp;3px</option>
                                                                        <option value="4px">&nbsp;&nbsp;4px</option>
                                                                    </select>&nbsp;&nbsp;
                                                                    <select name="inputBorderPattern" id="inputBorderPattern" style={{ width: '50%', height: '40%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                                        <option value="solid">&nbsp;&nbsp;Solid</option>
                                                                        <option value="inset">&nbsp;&nbsp;Inset</option>
                                                                        <option value="outset">&nbsp;&nbsp;Outset</option>
                                                                        <option value="groove">&nbsp;&nbsp;Groove</option>
                                                                        <option value="ridge">&nbsp;&nbsp;Ridge</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="form">Border Radius</label><br />
                                                                    <select name="inputBorderRadius" id="inputBorderRadius" style={{ width: '80%', height: '50%', borderColor: '#e0dada', borderRadius: '6px' }}>
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
                                                                        style={{ width: '30%', height: '50%', borderColor: '#e0dada' }}
                                                                    />
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="form">Font Color</label><br />
                                                                    <input
                                                                        type="color"
                                                                        id="buttonFontColor"
                                                                        name="buttonFontColor"
                                                                        style={{ width: '30%', height: '50%', borderColor: '#e0dada' }}
                                                                    />
                                                                </div>
                                                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                                                    <label for="form">Button Border Radius</label><br />
                                                                    <select name="buttonBorderRadius" id="buttonBorderRadius" style={{ width: '80%', height: '50%', borderColor: '#e0dada', borderRadius: '6px' }}>
                                                                        <option value="5px">&nbsp;&nbsp;5px</option>
                                                                        <option value="6px">&nbsp;&nbsp;6px</option>
                                                                        <option value="7px">&nbsp;&nbsp;7px</option>
                                                                        <option value="8px">&nbsp;&nbsp;8px</option>
                                                                        <option value="9px">&nbsp;&nbsp;9px</option>
                                                                        <option value="10px">&nbsp;&nbsp;10px</option>
                                                                    </select><br /><br />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </center>
                                        <center><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                            <button type="submit" className="btn btn-primary" id="submitBtn" style={{ width: '20%' }}>Submit</button>
                                        </center><br />
                                    </div>
                                </center>
                            </div><br />
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