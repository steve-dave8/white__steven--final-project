import React from 'react'
import sampleCode from '../page-images/code-snapshot.png'

const CodeSample = () => {
    return (
        <figure id="sample-code">
            <figcaption>
                <h2>Sample Code</h2>
                <p style={{lineHeight: "3", textAlign: "center"}}>This screenshot was created using the VS Code extension "Code Snapshot."
                Some long lines of code were reformatted to fit.</p>
            </figcaption>
            <img style={{width: "100%"}} src={sampleCode} alt="A sample of code used in this project."/>
        </figure>
    )
}

export default CodeSample