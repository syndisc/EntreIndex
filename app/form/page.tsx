"use client"
import React, { useCallback, useEffect, useState } from 'react'

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { surveyJson2} from './survey'
import Navbar from '../component/navbar';

const FormPage = () => {

    const survey = new Model(surveyJson2);
    const alertResults = useCallback((sender: any) => {
        const results = JSON.stringify(sender.data);
        alert(results);
    }, []);
    
    survey.onComplete.add(alertResults);
    
    return (
        <div>
            <Navbar/>
            <Survey model={survey} />
        </div>
    )
    
}

export default FormPage