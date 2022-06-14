import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {REACT_APP_API_URL} from "../utils/consts";
const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    const goDeviceId = () => navigate(DEVICE_ROUTE + '/' + device.id)
//    alert(goDeviceId)
    return (
        <Col md={3} className={"mt-3"} onClick={goDeviceId}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width='100%' src={REACT_APP_API_URL + device.img} alt={'logo'}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
