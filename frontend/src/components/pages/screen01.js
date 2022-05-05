import React, { Component } from 'react'
import Axios from 'axios';
import '../../assets/css/sanjay.css';

const initialStates = {
    file: '',
    xmlFile: 'No-File'
}

export default class Screen01 extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.convertXMLToJSONFormat = this.convertXMLToJSONFormat.bind(this);
        this.state = initialStates;
    }

    componentDidMount(e){
        document.getElementById("submitBtn").disabled = true;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //upload product image to firebase
    async onFileUpload(e) {
        const file = e.target.files[0];
        this.setState({ file: file });

        alert('File Uploaded Successfully!!', this.state.file);
        document.getElementById("submitBtn").disabled = false;

        // const storageRef = firebase.storage().ref();
        // const fileRef = storageRef.child(file.name);

        // await fileRef.put(file).then(() => {
        // }).catch(error => {
        //     alert(error.message);
        // });

        // const downloadURL = await fileRef.getDownloadURL();
        // this.setState({ xmlFile: downloadURL });
        // alert('File Uploaded Successfully!!', file.name);
    }

    onSubmit(e){
        e.preventDefault();

        // Axios.get(XMLData, {
        //     "Content-Type": "application/xml; charset=utf-8"
        // }).then(res => {
        //    console.log('RESPONSE : ', res.data);
        // }).catch(error => {
        //     console.log('Error Occurred : ', error);
        // }); 

        // fetch(this.state.xmlFile, {
        //     mode: 'no-cors' // 'cors' by default
        // })
        // .then((res) => {
        //     // Do something with response
        //     const jsonDataFromXml = new XMLParser().parseFromString(res.data);
    
        //     console.log('JSON : ', jsonDataFromXml);
        // });

        const reader = new FileReader();

        reader.readAsText(this.state.file);

        reader.onloadend = evt => {
            const readerData = evt.target.result;

            const parser = new DOMParser();
            const xml = parser.parseFromString(readerData, "text/xml");

            console.log(
                "data",
                new XMLSerializer().serializeToString(xml.documentElement)
            );
            // var convert = require('xml-js');
            // var result = convert.xml2json(new XMLSerializer().serializeToString(xml.documentElement), {compact: true, spaces: 4});
            // console.log(result);

            // var XMLParser = require("react-xml-parser");
            // var NewXml = new XMLParser().parseFromString(
            //     new XMLSerializer().serializeToString(xml.documentElement)
            // ); // Assume xmlText contains the example XML
            // console.log("newxml", NewXml.data);

            this.setState({ xmlFile: new XMLSerializer().serializeToString(xml.documentElement) });
        }

    }

    convertXMLToJSONFormat(e){
        e.preventDefault();

        alert('Hello!' + this.state.xmlFile);
  
        // Axios.post('http://localhost:3001/convertToJson/convertXmlToJson', parameter)
        // .then((data) => {
        //     console.log('RESULT :', data);
        // })
        // .catch((e) => {
        //     console.log('Error :', e);
        // })

        Axios.get(`http://localhost:3001/convertToJson/XmlToJson/123`)
        .then((data) => {
            console.log('RESULT :', data);
        })
        .catch((e) => {
            console.log('Error :', e);
        })

    }
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="file"
                        className="form-control"
                        id="file"
                        name="file"
                        onChange={this.onFileUpload}
                    /><br />
                    <button type="submit" className="btn btn-dark" id="submitBtn">Submit File</button><br />

                    <textarea value={this.state.xmlFile} className="textAreaStyle"></textarea><br /><br />
                    <button type="submit" className="btn btn-secondary" id="cancelBtn" onClick={this.convertXMLToJSONFormat}>Convert</button>
                </form>
                
                 
            </div>
        )
    }
}


