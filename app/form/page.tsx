"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../component/navbar'
import { FormAnswer, FormProfile } from '../model/form'
import { options, questions } from '../utility/data'
import { City, Province } from '../model/province'
import { ChangeSpace } from '../utility/utility';
import { SendAPIRequest } from '../utility/apiController'
import { User } from '../model/user'
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { surveyJson2, surveyJson } from './survey'

const FormPage = () => {

    const survey = new Model(surveyJson2);
    const alertResults = useCallback((sender: any) => {
        const results = JSON.stringify(sender.data);
        alert(results);
    }, []);
    
    survey.onComplete.add(alertResults);
    
    return <Survey model={survey} />;
}

export default FormPage