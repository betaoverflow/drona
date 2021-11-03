import axios from 'axios'
import React, { Component } from 'react'
import { View } from '../components/Themed'

class PhotoHandler extends Component {
    state = {
        selectedFile: null,
    }

    // on file select , from the pop up
    onFileChange = e => {
        this.setState({ selectedFile: e.target.files[0] })
    }

    onFileUpload = () => {
        if (this.state.selectedFile) {
            // create an object of formData
            const formData = new FormData()

            // update the formData object
            formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
            console.log(this.state.selectedFile)
            axios.post('/add', formData)
        } else {
            console.log('No file found')
        }

        // file content
        fileData = () => {
            if (this.state.selectedFile) {
                return (
                    <View>
                        <h2>File Details:</h2>

                        <p>File Name: {this.state.selectedFile.name}</p>

                        <p>File Type: {this.state.selectedFile.type}</p>

                        <p>Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}</p>
                    </View>
                )
            } else {
                return 'Choose before pressing the upload button'
            }
        }
    }

    render() {
        return (
            <View>
                <View>
                    <View>
                        <label htmlFor="code-file">Choose File </label>
                        <input id="code-file" type="file" onChange={this.onFileChange} name="photo" />
                        <button darkText={true} onClick={this.onFileUpload}>
                            {' '}
                            🦄 Upload!
                        </button>
                    </View>
                    <select
                        id="selector"
                        value={this.props.lang}
                        onChange={e => {
                            this.props.setLang(e.target.value)
                            console.log(e.target.value)
                        }}
                    >
                        <option value="cpp">C++</option>
                        <option value="py">Python</option>
                    </select>
                    <Btn handleClick={this.props.handleSubmit}> 🐥 Submit</Btn>
                </View>
                <Text>{this.fileData()}</Text>
            </View>
        )
    }
}

export default PhotoHandler
