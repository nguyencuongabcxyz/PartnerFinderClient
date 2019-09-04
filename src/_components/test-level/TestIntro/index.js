import React from 'react'
import './style.css'
import PageLayout from '../../layout/PageLayout';
import BasicButton from '../../shared/BasicButton';
import history from '../../../history';

const buttonCustomStyles = {
    background: '#F15D03',
    border: 'none',
    color: 'white',
    margin: '0 auto',
    display: 'block'
}



const TestIntro = () => {
    return (
        <PageLayout>
            <div id="text-intro">
                <h1>
                    Test Instructions
                </h1>
                <div id="content-intro">
                <ul>
                    <li><strong>Time:</strong> 10 minutes</li>
                    <li>There are 15 questions for this test.</li>
                    <li>Chosse a correct anwser for each question by checking corresponding check box.</li>
                    <li>You can submit anwser for this test by clicking the submit button at the bottom of this test or you can wait until the timer counts to 0.</li>
                    <li>After submit this test, we will automatically set your level based on test result.</li>
                </ul>
                </div>
                <BasicButton onClick={() => {history.push('/testpage')}} content="Start" customStyles={buttonCustomStyles} />
            </div>
        </PageLayout>
    );
}

export default TestIntro;