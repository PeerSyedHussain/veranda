import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AddCourse extends Component {
    constructor(props){
        super(props);

        this.state = {
            category_option : [
                {
                    id : 1,
                    value : 'IBPS Exams'
                },
                {
                    id : 2,
                    value : 'Finance Markets'
                },
                {
                    id : 3,
                    value : 'Economics'
                },
                {
                    id : 4,
                    value : 'Finance Services'
                },
                {
                    id : 5,
                    value : 'Statistics'
                },
                {
                    id : 6,
                    value : 'Data Analysis'
                },
                {
                    id : 7,
                    value : 'Accountant'
                },
                {
                    id : 8,
                    value : 'GST'
                },
                {
                    id : 9,
                    value : 'Market Trend'
                },
            ],
            level_option : [
                {
                    id : 1,
                    value : 'Beginner'
                },
                {
                    id : 2,
                    value : 'Intermediate'
                },
                {
                    id : 3,
                    value : 'Expert'
                },
            ],
            price_option : [
                {
                    id : 1,
                    value : 'Free'
                },
                {
                    id : 2,
                    value : 'Paid'
                }
            ],
            amount : '',
            languages_option : [
                {
                    id : 1,
                    value : 'Tamil'
                },
                {
                    id : 2,
                    value : 'English'
                },
                {
                    id : 3,
                    value : 'Hindi'
                },
                {
                    id : 4,
                    value : 'Malayalam'
                },
                {
                    id : 5,
                    value : 'Telugu'
                },
            ],
            setPrice : false,
            priceValue : 'Free',
            categoryValue : 'IBPS Exams',
            levelValue : 'Beginner',
            langvalue : [],
            setUploaderName : '',
            setTotalLesson : '',
            setCourseName : '',
            setCourseDesc : '',
            setCourseImg : '',
            setProviderImg : '',
            temp_obj : {
                id : '',
                dataCategory : '',
                dataLevel : '',
                dataPrice : "",
                dataLanguage : "",
                dataSort : "Popular",
                className : "course-box",
                firstChildClass : "course-img",
                img_url:'',
                courseName : '',
                courseDesc : '',
                courseProviderName : '',
                courseTotalLesson : '',
                courseAvailableLang : '',
                courseProviderImg : '' ,
                dataCourseAmt : '',
            }
        }
    }

    setPrice = (e) => {
        // console.log(e.target.value)
        let price = e.target.value
        this.setState({
            priceValue : price
        },()=> {
            if(price === 'Paid'){
                this.setState({
                    setPrice : true
                })
            }
            else{
                this.setState({
                    setPrice : false
                })
            }
        })
    }
    setLevel = (e) => {
        // console.log(e.target.value)
        let level = e.target.value
        this.setState({
            levelValue : level
        })
    }
    setCategory = (e) => {
        // console.log(e.target.value)
        let category = e.target.value
        this.setState({
            categoryValue : category
        })
    }

    setAmount = (e) => {
        let amount = e.target.value
        this.setState({
            amount : amount
        })
    }

    setLanguage = (e) => {
        // console.log(e.target.options)
        let options = e.target.options
        let value = []

        for (let i = 0;i < options.length;i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        // console.log('val',value.toString())
        this.setState({
            langValue : value
        })
    }

    setUploaderName = (e) => {
        let name = e.target.value
        this.setState({
            setUploaderName : name
        })
    }

    setTotalLesson = (e) => {
        let count = e.target.value
        this.setState({
            setTotalLesson : count
        })
    }

    setCourseName = (e) => {
        let name = e.target.value
        this.setState({
            setCourseName : name
        })
    }

    setCourseDesc = (e) => {
        let paragraph = e.target.value
        this.setState({
            setCourseDesc : paragraph
        })
    }

    setCourseImg = (e) => {
        console.log(e.target.files[0])
        let filename = URL.createObjectURL(e.target.files[0])
        this.setState({
            setCourseImg : filename
        })
    }

    setProviderImg = (e) => {
        console.log(e.target.files[0])
        let filename = URL.createObjectURL(e.target.files[0])
        this.setState({
            setProviderImg : filename
        })
    }

    addCourse = (e) => {
        e.preventDefault()

        this.setState(prevState => ({
            temp_obj: {                   // object that we want to update
                ...prevState.temp_obj,    // keep all other key-value pairs
                id : 11,
                dataCategory : this.state.categoryValue,
                dataLevel : this.state.levelValue,
                dataPrice : this.state.priceValue,
                dataLanguage : this.state.langValue.toString(),
                dataSort : "Popular",
                className : "course-box",
                firstChildClass : "course-img",
                img_url:this.state.setCourseImg,
                courseName : this.state.setCourseName,
                courseDesc : this.state.setCourseDesc,
                courseProviderName : this.state.setUploaderName,
                courseTotalLesson : this.state.setTotalLesson,
                courseAvailableLang : this.state.langValue.toString(),
                courseProviderImg :  this.state.setProviderImg,
                dataCourseAmt : this.state.amount,       // update the value of specific key
            }
        }),()=> {
            console.log(this.state.temp_obj)
        })
        // console.log(this.state.categoryValue,this.state.levelValue,this.state.priceValue,
        //     this.state.amount,this.state.langValue,this.state.setUploaderName,this.state.setCourseDesc,
        //     this.state.setCourseName,this.state.setTotalLesson)

    }

    render() {
         const { category_option,level_option,price_option,setPrice,amount,setProviderImg,temp_obj,
                languages_option,setUploaderName,setTotalLesson,setCourseName,setCourseDesc,setCourseImg } = this.state
        return (
            <>
               <section className='row my-4 justify-content-center align-items-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>
                                Add course
                            </div>
                            <div className='card-body'>
                                <Form onSubmit={this.addCourse}>
                                    <Form.Group controlId="category">
                                        <Form.Label>Select Category</Form.Label>
                                        <Form.Control as="select" onChange={this.setCategory} value={ this.state.categoryValue }>
                                            {
                                                category_option.map((item,key) => {
                                                    return (
                                                        <>
                                                            <option id={key} value={item.value}>{item.value}</option>
                                                        </>   
                                                    )
                                                })
                                            }                                           
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="level">
                                        <Form.Label>Select Level</Form.Label>
                                        <Form.Control as="select" onChange={this.setLevel} value={ this.state.levelValue }>
                                            {
                                                level_option.map((item,key) => {
                                                    return (
                                                        <>
                                                            <option id={key} value={item.value}>{item.value}</option>
                                                        </>   
                                                    )
                                                })
                                            }                                           
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="price">
                                        <Form.Label>Select Price</Form.Label>
                                        <Form.Control as="select" onChange={this.setPrice} value={ this.state.priceValue }>
                                            {
                                                price_option.map((item,key) => {
                                                    return (
                                                        <>
                                                            <option id={key} value={item.value}>{item.value}</option>
                                                        </>   
                                                    )
                                                })
                                            }                                           
                                        </Form.Control>
                                    </Form.Group>
                                    {
                                        setPrice ? 
                                        <Form.Group>  
                                            <Form.Control type="number" value={amount} onChange={this.setAmount} placeholder="Enter Price Here" />
                                        </Form.Group> : ''
                                    }

                                    <Form.Group controlId="language">
                                        <Form.Label>Select Languages</Form.Label>
                                        <Form.Control as="select" onChange={this.setLanguage} value={ this.state.langValue } multiple>
                                            {
                                                languages_option.map((item,key) => {
                                                    return (
                                                        <>
                                                            <option id={key} value={item.value}>{item.value} </option>
                                                        </>   
                                                    )
                                                })
                                            }                                           
                                        </Form.Control>
                                    </Form.Group>

                                    
                                    <Form.Group>  
                                        <Form.Label>Uploader Name</Form.Label>
                                        <Form.Control type="text"  onChange={this.setUploaderName} value={setUploaderName} placeholder="Enter Course Uploaded Person name" />
                                    </Form.Group>
                                    <Form.Group>  
                                        <Form.Label>Total Lessons</Form.Label>
                                        <Form.Control type="number" onChange={this.setTotalLesson} value={setTotalLesson} placeholder="Enter Course Total Lesson count" />
                                    </Form.Group>
                                    <Form.Group>  
                                        <Form.Label>Course Name</Form.Label>
                                        <Form.Control type="text" onChange={this.setCourseName} value={setCourseName}  placeholder="Enter Course name" />
                                    </Form.Group>
                                    <Form.Group>  
                                        <Form.Label>Course Description</Form.Label>
                                        <Form.Control type="text" onChange={this.setCourseDesc} value={setCourseDesc}  placeholder="Enter Course Description" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.File id="course_img" onChange={this.setCourseImg}  label="Select course image" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.File id="course__provider_img" onChange={this.setProviderImg}  label="Select course Provider image" />
                                    </Form.Group>


                                    <Link to='/' temp_obj = {{temp_obj}}>
                                        <Button variant='primary' type='submit'>
                                            Submit
                                        </Button>
                                    </Link>
                                </Form>
                            </div>
                        </div>        
                    </div>
                </section>        
            </>
        );
    }
}

export default AddCourse;