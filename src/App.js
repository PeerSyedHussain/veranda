import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import IBPS_Pic from './assets/img/ibps-exam.jpg'
import Economic from './assets/img/economic.jpg'
import FinanceMarket from './assets/img/finance-market.jpg'
import FinanceService from './assets/img/finance-service.jpg'
import Statistic from './assets/img/statistics.jpg'
import DataAnalysis from './assets/img/data-analysis.jpg'
import Accountant from './assets/img/accountant.jpg'
import GST from './assets/img/gst.jpg'
import MarketTrend from './assets/img/market-trend.jpg'
import Provider1 from './assets/img/provider1.jpg'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import AddCourse from './AddCourse';
// import AddCourse from './AddCourse';
class App extends Component {
    constructor(props){
      super(props);

        this.state = {
          courses : [
            { 
                id : 1,
                dataCategory : "IBPS Exams",
                dataLevel : "Beginner",
                dataPrice : "Free",
                dataLanguage : "English,Tamil,Hindi",
                dataSort : "Popular",
                className : "course-box",
                firstChildClass : "course-img",
                img_url:IBPS_Pic,
                courseName : 'Veranda IBPS Exam Online Coaching Class',
                courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                courseProviderName : 'David Warner',
                courseTotalLesson : 20,
                courseAvailableLang : 'English,Tamil,Hindi',
                courseProviderImg :  Provider1,
                dataCourseAmt : 7500,
            },
            { 
              id : 2,
              dataCategory : "Finance Services",
              dataLevel : "Intermediate",
              dataPrice : "Paid",
              dataLanguage : "English,Tamil,Hindi",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:FinanceService,
              courseName : 'Veranda Finance service Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 18,
              courseAvailableLang : 'English,Tamil,Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 3,
              dataCategory : "Finance Markets",
              dataLevel : "Expert",
              dataPrice : "Free",
              dataLanguage : "English,Tamil,Hindi,Malayalam",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:FinanceMarket,
              courseName : 'Veranda Finance Market Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Hindi,Malayalam',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 4,
              dataCategory : "Economics",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "English,Tamil,Telugu",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:Economic,
              courseName : 'Veranda Economic Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Telugu',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 5,
              dataCategory : "Statistics",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "English",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:Statistic,
              courseName : 'Veranda Statistcis Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 6,
              dataCategory : "Data Analysis",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "Hindi",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:DataAnalysis,
              courseName : 'Veranda Data Analysis Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 7,
              dataCategory : "Accountant",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "Tamil",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:Accountant,
              courseName : 'Veranda Accountant Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'Tamil',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 8,
              dataCategory : "GST",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "Tamil,Malayalam",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url: GST,
              courseName : 'Veranda GST Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'Tamil,Malayalam',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 9,
              dataCategory : "Market Trend",
              dataLevel : "Expert",
              dataPrice : "Free",
              dataLanguage : "Tamil,Telugu",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url: MarketTrend,
              courseName : 'Veranda Market Trend Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'Tamil,Telugu',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 10,
              dataCategory : "IBPS Exams",
              dataLevel : "Intermediate",
              dataPrice : "Paid",
              dataLanguage : "Tamil,English",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:IBPS_Pic,
              courseName : 'Veranda IBPS Exam Online Coaching Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 20,
              courseAvailableLang : 'English,Tamil',
              courseProviderImg :  Provider1,
              dataCourseAmt : 7500,
          },
          ],
          categoryFilterCourse : [],
          FinalCourseList : [],
          category_list : [
            {
              id : 'all',
              label : 'All',
              value : true
            },
            {
              id : 'ibps_exams',
              label : 'IBPS Exams',
              value : false
            },
            {
              id : 'finance_markets',
              label : 'Finance Markets',
              value : false
            },
            {
              id : 'economics',
              label : 'Economics',
              value : false
            },
            {
              id : 'finance_services',
              label : 'Finance Services',
              value : false
            },
            {
              id : 'statistics',
              label : 'Statistics',
              value : false
            },
            {
              id : 'data_analysis',
              label : 'Data Analysis',
              value : false
            },
            {
              id : 'accountant',
              label : 'Accountant',
              value : false
            },
            {
              id : 'gst',
              label : 'GST',
              value : false
            },
            {
              id : 'market_trend',
              label : 'Market Trend',
              value : false
            },
          ],
          level_list : [
            {
              id : 'beginner',
              label : 'Beginner',
              value : false
            },
            {
              id : 'intermediate',
              label : 'Intermediate',
              value : false
            },
            {
              id : 'expert',
              label : 'Expert',
              value : false
            },
          ],
          price_list : [
            {
              id : 'free',
              label : 'Free',
              value : false
            },
            {
              id : 'paid',
              label : 'Paid',
              value : false
            },
          ],
          language_list : [
            {
              id : 'tamil',
              label : 'Tamil',
              value : false
            },
            {
              id : 'english',
              label : 'English',
              value : false
            },
            {
              id : 'malayalam',
              label : 'Malayalam',
              value : false
            },
            {
              id : 'hindi',
              label : 'Hindi',
              value : false
            },
            {
              id : 'telugu',
              label : 'Telugu',
              value : false
            },
          ],
          filtered_list : [],
          checkTrueCategory : [],
          checkTrueLevel : [],
          checkTruePrice : [],
          checkTrueLang : []
        }
    }

    componentDidMount(){
        let checkTrueCategory = this.checkTrueCategory()
        // console.log('checkTrueCategory',checkTrueCategory)
        this.setState({
            checkTrueCategory : checkTrueCategory
        },()=> {
            this.combiningFilter()
        })
    }

    categoryFilter = (e) => {
      // console.log(e.target.nextSibling.textContent,e.target.checked)

      let selected_category = e.target.nextSibling.textContent

      let value = e.target.checked

      this.setState(prevState => ({
          category_list : prevState.category_list.map(
            (el,key) =>  el.label === selected_category ? {
              ...el,
              value : value
            }
            : 
            el
          ) 
      }),() => {
          if(selected_category !== 'All'){
              this.setState(prevState => ({
                category_list : prevState.category_list.map(
                  (el,key) =>  (el.label === 'All' && el.value === true) ? {
                    ...el,
                    value : false
                  }
                  : 
                  el
                ) ,
                filtered_list : []
            }),() => {
              // console.log(this.state.category_list)

              let checkTrueCategory = this.checkTrueCategory()

              // console.log('checkTrueCategory',checkTrueCategory)

              this.setState({
                  checkTrueCategory : checkTrueCategory
              },() => {
                  this.combiningFilter()
              })
            })
          }
          else{
            this.setState(prevState => ({
                category_list : prevState.category_list.map(
                  (el,key) => (el.label !== 'All') ? {
                    ...el,
                    value : false
                  }
                  : 
                  el
                ) ,
            }),() => {
              // console.log(this.state.category_list)

              let checkTrueCategory = this.checkTrueCategory()
              
              // console.log('checkTrueCategory',checkTrueCategory)

              this.setState({
                checkTrueCategory : checkTrueCategory
              },() => {
                  this.combiningFilter()
              })
            })
          }
      })
    } 

    checkTrueCategory(){
        let category_list = this.state.category_list
        
        let category_true_list = []

        category_list.map((item,key) => (item.value) ? category_true_list.push(item) : '')
      
        return category_true_list;
    }


    levelFilter = (e) => {
      // console.log(e.target.nextSibling.textContent,e.target.checked)

      let selected_category = e.target.nextSibling.textContent

      let value = e.target.checked
      
      this.setState(prevState => ({
          level_list : prevState.level_list.map(
            el => el.label === selected_category ? {
              ...el,
              value : value
            }
            : 
            el
          ) 
      }),() => {
        // console.log(this.state.level_list)
        let checkTrueLevel = this.checkTrueLevel()
        
        // console.log('checkTrueLevel',checkTrueLevel)

        this.setState({
            checkTrueLevel : checkTrueLevel
        },()=>{
            this.combiningFilter()
        })

      })
    }


    checkTrueLevel(){
        let level_list = this.state.level_list
          
        let level_true_list = []

        level_list.map((item,key) => (item.value) ? level_true_list.push(item) : '' )
        
        return level_true_list;
    }

    

    priceFilter = (e) => {
      // console.log(e.target.nextSibling.textContent,e.target.checked)

      let selected_category = e.target.nextSibling.textContent
  
      let value = e.target.checked
        
      this.setState(prevState => ({
          price_list : prevState.price_list.map(
            el => el.label === selected_category ? {
              ...el,
              value : value
            }
            : 
            el
          ) 
      }),() => {
        // console.log(this.state.price_list)

        let checkTruePrice = this.checkTruePrice()

        this.setState({
            checkTruePrice : checkTruePrice
        },()=> {
           this.combiningFilter()
        })
      })
    }

    checkTruePrice(){
      let price_list = this.state.price_list
          
      let price_true_list = []

      price_list.map((item,key) => (item.value) ? price_true_list.push(item) : '' )
      
      return price_true_list;
    }


    languageFilter = (e) => {
        console.log(e.target.nextSibling.textContent,e.target.checked)

        let selected_category = e.target.nextSibling.textContent

        let value = e.target.checked
        
        this.setState(prevState => ({
            language_list : prevState.language_list.map(
              el => el.label === selected_category ? {
                ...el,
                value : value
              }
              : 
              el
            ) 
        }),() => {
          // console.log(this.state.language_list)

          let checkTrueLang = this.checkTrueLang()

          this.setState({
              checkTrueLang : checkTrueLang
          },()=> {
            this.combiningFilter()
          })
        })
    }

    checkTrueLang(){
        let language_list = this.state.language_list
            
        let lang_true_list = []

        language_list.map((item,key) => (item.value) ? lang_true_list.push(item) : '' )
        
        return lang_true_list;
    }

    combiningFilter(){
        let category = this.state.checkTrueCategory

        let level = this.state.checkTrueLevel

        let price = this.state.checkTruePrice

        let lang = this.state.checkTrueLang

        let combinedArray = []

        combinedArray.push(...category,...level,...price,...lang)

        console.log('combinedArray',combinedArray)

        this.setFilterData(combinedArray)
    }

    setFilterData(data){
        this.setState({
            filtered_list : data
        },() => {
          this.showCourses()
        })
    }


    showCourses(){

      let filtered_item = this.state.filtered_list

      let overall_course_list = this.state.courses

      let category_wise_course = []

      let level_wise_course = []

      let price_wise_course = []

      let lang_wise_course = []

      let removeDuplicates = []

      let temp_obj = {}

      for (let index = 0; index < filtered_item.length; index++) {
          for(let i=0;i<overall_course_list.length;i++){
              if(filtered_item[index].label === 'All'){
                  category_wise_course.push(overall_course_list[i])
              }
              else{
                if(filtered_item[index].label === overall_course_list[i].dataCategory){
                    category_wise_course.push(overall_course_list[i])
                }
              }   
          }
      }

      console.log('category_wise_course',category_wise_course)

      for(let index = 0;index < filtered_item.length;index++){
          for(let i =0;i<category_wise_course.length;i++){
              if(filtered_item[index].label === category_wise_course[i].dataLevel){
                  level_wise_course.push(category_wise_course[i])
              }
          }
      }

      console.log('level_wise_course',level_wise_course)

      for(let index = 0;index < filtered_item.length;index++){
        if(level_wise_course.length > 0){
            for(let i =0; i<level_wise_course.length;i++){
                if(filtered_item[index].label === level_wise_course[i].dataPrice){
                    price_wise_course.push(level_wise_course[i])
                }
            }
        }
        else{
            for(let i =0; i<category_wise_course.length;i++){
                if(filtered_item[index].label === category_wise_course[i].dataPrice){
                    price_wise_course.push(category_wise_course[i])
                }
            }
        }  
      }
      console.log('price_wise_course',price_wise_course)

      for(let index =0;index<filtered_item.length;index++){
          if(level_wise_course.length > 0){
              if(price_wise_course.length > 0){
                  for(let i=0;i<price_wise_course.length ;i++){
                    var str = price_wise_course[i].dataLanguage
                    if(str.indexOf(filtered_item[index].label) !== -1){
                        lang_wise_course.push(price_wise_course[i])
                    } 
                  }
              }
              else{
                for(let i=0;i<level_wise_course.length ;i++){
                    var str1 = level_wise_course[i].dataLanguage
                    if(str1.indexOf(filtered_item[index].label) !== -1){
                      lang_wise_course.push(level_wise_course[i])
                    } 
                }
              }
          }
          else if(price_wise_course.length > 0){
            for(let i=0;i<price_wise_course.length ;i++){
              var str3 = price_wise_course[i].dataLanguage
              if(str3.indexOf(filtered_item[index].label) !== -1){
                  lang_wise_course.push(price_wise_course[i])
              } 
            }
          }
          else{
            for(let i=0;i<category_wise_course.length ;i++){
                var str2 = category_wise_course[i].dataLanguage
                if(str2.indexOf(filtered_item[index].label) !== -1){
                  lang_wise_course.push(category_wise_course[i])
                } 
            }
          }
      }

      console.log('language wise course',lang_wise_course)

      if(lang_wise_course.length > 0){
          for(let i =0;i<lang_wise_course.length;i++){
              let objTitle = lang_wise_course[i].id
              temp_obj[objTitle] = lang_wise_course[i]
          }
          // console.log(temp_obj)
          for(let item in temp_obj){
              removeDuplicates.push(temp_obj[item])
          }
      }

      console.log('removeDuplicates',removeDuplicates)
    
      this.setState({
          // FinalCourseList : level_wise_course.length <= 0 ? category_wise_course : price_wise_course.length <= 0 ? level_wise_course : price_wise_course  
          // FinalCourseList : level_wise_course.length > 0 ? level_wise_course : price_wise_course.length > 0 ? price_wise_course : removeDuplicates.length > 0 ? removeDuplicates : category_wise_course
          FinalCourseList : removeDuplicates.length > 0 ? removeDuplicates : price_wise_course.length > 0 ? price_wise_course : level_wise_course.length > 0 ? level_wise_course : category_wise_course
      })
  }


    render() {
        const { FinalCourseList,category_list,level_list,price_list,language_list } = this.state;
        return (
          <>
            <Router>
              <section className='row my-4'>
                  <div className='col-md-3'>
                      <div>
                          <h5 className='filter-heading'>
                            Category
                            <span className='bottom-line'>
                              <span className='bottom-green-line'></span>
                            </span>
                          </h5>
                          <ul className='p-0'>
                              {
                                category_list.map((item,key) => {
                                    return (
                                        <>
                                            <li id={key}>
                                                <Form.Group controlId={item.id}>
                                                  <Form.Check id={item.id} type='checkbox' label={item.label}
                                                      checked={(item.value === true) ? true : false }
                                                    onChange={this.categoryFilter}
                                                  />
                                                </Form.Group>
                                            </li>
                                        </>
                                    );
                                })
                              }
                          </ul>
                      </div>
                      <div>
                          <h5 className='filter-heading'>
                            Level
                            <span className='bottom-line'>
                              <span className='bottom-green-line'></span>
                            </span>
                          </h5>
                          <ul className='p-0'>
                            {
                                level_list.map((item,key) => {
                                    return (
                                        <>
                                            <li id={key}>
                                                <Form.Group controlId={item.id}>
                                                  <Form.Check id={item.id} type='checkbox' label={item.label}
                                                      checked={(item.value === true) ? true : false }
                                                    onChange={this.levelFilter}
                                                  />
                                                </Form.Group>
                                            </li>
                                        </>
                                    );
                                })
                              }
                            
                          </ul>
                      </div>
                      <div>
                          <h5 className='filter-heading'>
                            Price
                            <span className='bottom-line'>
                              <span className='bottom-green-line'></span>
                            </span>
                          </h5>
                          <ul className='p-0'>
                              {
                                price_list.map((item,key) => {
                                    return (
                                        <>
                                            <li id={key}>
                                                <Form.Group controlId={item.id}>
                                                  <Form.Check id={item.id} type='checkbox' label={item.label}
                                                      checked={(item.value === true) ? true : false }
                                                    onChange={this.priceFilter}
                                                  />
                                                </Form.Group>
                                            </li>
                                        </>
                                    );
                                })
                              }
                          </ul>
                      </div>
                      <div>
                          <h5 className='filter-heading'>
                            Language
                            <span className='bottom-line'>
                              <span className='bottom-green-line'></span>
                            </span>
                          </h5>
                          <ul className='p-0'>
                              {
                                language_list.map((item,key) => {
                                    return (
                                        <>
                                            <li id={key}>
                                                <Form.Group controlId={item.id}>
                                                  <Form.Check id={item.id} type='checkbox' label={item.label}
                                                      checked={(item.value === true) ? true : false }
                                                    onChange={this.languageFilter}
                                                  />
                                                </Form.Group>
                                            </li>
                                        </>
                                    );
                                })
                              }
                          </ul>
                      </div>
                  </div>
                  <div className='col-md-9'>
                  
                    <Link className='outline-primary btn btn-primary' to='/add-course'>
                          Add Course
                    </Link>
                  
                    
                    <ul className='p-0 d-flex flex-wrap'>
                        {
                            FinalCourseList.map((item,key) => {
                              return (
                                  <>
                                      <li id={key} data-id={item.id} data-category={item.dataCategory} 
                                          data-sort={item.dataSort} data-level = {item.dataLevel} data-price = {item.dataPrice}
                                          data-language = {item.dataLanguage}
                                          className={item.className}>
                                          <div className={item.firstChildClass}>
                                              <img src={item.img_url} alt="pic" className='shadow-sm w-100'/>
                                              <div className='price-bg'>
                                                  <p className='mb-0'>{(item.dataPrice === 'Free') ?  'Free' : `Rs ${item.dataCourseAmt}`  }</p>
                                              </div>
                                          </div>
                                          <div className='course-tot-info'>
                                              <div className='provider-info'>
                                                  <div className='provider-img'>
                                                    <img src={item.courseProviderImg} alt="pic" className='shadow-sm w-100'/>
                                                  </div>
                                                  <div className='ml-3'>
                                                      <p className='mb-0'>{item.courseProviderName}</p>

                                                      <div>
                                                        <p className='mb-0 d-flex flex-wrap'>
                                                          {item.courseTotalLesson} Lessons 
                                                            <span className='separator mx-2'></span>
                                                          {item.courseAvailableLang}
                                                        </p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <h3 className='course-name'>{item.courseName}</h3>
                                              <p className='course-desc mb-0'>
                                                {item.courseDesc}
                                              </p>
                                              <div className='btn-sec my-3'>
                                                <Button variant="success">
                                                    Purchase Now
                                                </Button>
                                                <Button variant="outline-success">
                                                    Get Information
                                                </Button>
                                              </div>
                                          </div>
                                          
                                      </li>
                                  </>
                              );
                            })
                        }
                      </ul>
                  </div>
              </section>   
              <Switch>
                  <Route path='/add-course'>
                      <AddCourse />
                  </Route>
              </Switch>
            </Router>
          </>
          
        );
    }
}

export default App;