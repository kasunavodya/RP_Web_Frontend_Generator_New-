import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../../assets/css/file-uploader.css';

export const FileUploader = ({ }) => {
    const [file, setFile] = useState([]);
    const [filePath, setFilePath] = useState("");

    const onInputChange = (e) => {
        //console.log(e.target.files)
        setFile(e.target.files[0])
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file)

        axios.post('http://localhost:3001/uploadFile/upload', data)
            .then((e) => {
                toast.success('XML File Upload Success');
                console.log(e.data.file);
            })
            .catch((e) => {
                toast.error('XML File Upload Error')
            });
    };

    // const covertXMLToJSON = (e) => {
    //     e.preventDefault();
    //     console.log('FILE :', file.name);

    //     axios.post('http://localhost:3001/convertToJson/convertXmlToJson')
    //     .then((data) => {
    //         console.log('RESULT :', data);
    //     })
    //     .catch((e) => {
    //         console.log('Error :', e);
    //     })

        // let fileLocat = {
        //     file: filePath
        // } 

        // let test = {
        //     file: filePath
        // }

        // console.log('TEST FILE : ', test);
        // axios.post('http://localhost:3001/convertToJson/convertXmlToJson', test)
        // .then((data) => {
        //     console.log('RESULT :', data);
        // })
        // .catch((e) => {
        //     console.log('Error :', e);
        // })
    //}

     //upload product image to firebase
    //  const onFileChange = (e) => {
    //     const file = e.target.files[0];
    //     console.log('FILE : ', file);

    //     axios.post('http://localhost:3001/convertToJson/convertXmlToJson')
    //     .then((data) => {
    //         console.log('RESULT :', data);
    //     })
    //     .catch((e) => {
    //         console.log('Error :', e);
    //     })
    // }

   
    return (
        <div>
            <form method="post" action="#" id="#" onSubmit={onSubmit}>
                <div className="form-group files">
                    <input type="file" 
                        onChange={onInputChange}
                        className="form-control"
                        multiple 
                        required 
                        />
                </div>
                <button class="btn btn-primary" style={{ width: '200px' }}>Submit</button><br />
                <button class="btn btn-primary" style={{ width: '200px' }}>Convert XML to JSON</button>
            </form>

            <button class="btn btn-primary" style={{ width: '200px' }}>XML to JSON</button>
        </div>
    )
};