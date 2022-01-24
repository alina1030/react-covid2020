import React from 'react'
import {Card, Col, Row} from "antd";
import CountUp from "react-countup";
import confirmed from "../images/confirmed.jpg";

const CardComponent = ({totalIndiaCase}) => {
return (
    <>
    {totalIndiaCase.map((item,index) =>(
        <div className='row'>
            <div className='col-lg-12'>
                <div key={index} style={{padding:"10px", background: "#ececec"}}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card 
                            title="Confirmed"
                            bordered={false}
                            style={{width:360, height:215}}
                            >
                            <img 
                            src={confirmed} 
                            alt="confirmed"
                            style={{height:"70px",padding:"5px"}}
                            />
                            <br />
                            <i className='fas fa-arrow-up'/>
                            <CountUp
                              className='count'
                              start={0}
                              end={item.deltaconfirmed}
                              duration = {2.75}
                              separator = ","
                            />
                            <h2 className="text-warning">{item.confirmed}</h2>
                            </Card>
                        </Col>

                        <Col span={6}>
                            <Card 
                            title="Active"
                            bordered={false}
                            style={{width:360, height:215}}
                            >
                            <span style={{color:"mediumslateblue"}}>
                                <i className='fab fa-creative-commons-sampling fa-3x'/>

                            </span>
                            <br />
                            
                            
                            <h2 className="text-info">{item.active}</h2>
                            </Card>
                        </Col>

                        <Col span={6}>
                            <Card 
                            title="Recovered"
                            bordered={false}
                            style={{width:360, height:215}}
                            >
                            <span style={{color:"green"}}>
                                <i className='fab fa-creative-commons-sampling fa-3x'/>
                            </span>
                            <br />
                            
                            <i className='fas fa-arrow-up'/>
                            <CountUp 
                            className='count'
                            start={0}
                            end={item.deltarecovered}
                            duration={2.75}
                            separator=','
                            />
                            <h2 className="text-success">{item.recovered}</h2>
                            </Card>
                        </Col>

                        
                        <Col span={6}>
                            <Card 
                            title="Death"
                            bordered={false}
                            style={{width:360, height:215}}
                            >
                            
                                <i className='fab fa-skull-crossbones fa-3x'/>
                            
                            <br />
                            
                            <i className='fas fa-arrow-up'/>
                            <CountUp 
                            className='count'
                            start={0}
                            end={item.deltadeaths}
                            duration={2.75}
                            separator=','
                            />
                            <h2 className="text-dark">{item.deaths}</h2>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    ))}
    
    </>
)



}

export default CardComponent