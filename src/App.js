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
                dataLanguage : "Tamil",
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
              dataLanguage : "Tamil",
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
              dataLanguage : "Malayalam",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:FinanceMarket,
              courseName : 'Veranda Finance Market Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 4,
              dataCategory : "Economics",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "English",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:Economic,
              courseName : 'Veranda Economic Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 5,
              dataCategory : "Statistics",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "Telugu",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url:Statistic,
              courseName : 'Veranda Statistcis Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Hindi',
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
              courseAvailableLang : 'English,Tamil,Hindi',
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
              courseAvailableLang : 'English,Tamil,Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 8,
              dataCategory : "GST",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "Tamil",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url: GST,
              courseName : 'Veranda GST Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
            },
            { 
              id : 9,
              dataCategory : "Market Trend",
              dataLevel : "Expert",
              dataPrice : "Paid",
              dataLanguage : "Tamil",
              dataSort : "Popular",
              className : "course-box",
              firstChildClass : "course-img",
              img_url: MarketTrend,
              courseName : 'Veranda Market Trend Online Class',
              courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
              courseProviderName : 'David Warner',
              courseTotalLesson : 25,
              courseAvailableLang : 'English,Tamil,Hindi',
              courseProviderImg :  Provider1,
              dataCourseAmt : 5500,
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
          checkTruePrice : []
        }
    }

    componentDidMount(){
        // this.setState({
        //   FinalCourseList : this.state.courses
        // })

        // this.PageLoadList()
        let checkTrueCategory = this.checkTrueCategory()
        // console.log('checkTrueCategory',checkTrueCategory)
        this.setState({
            checkTrueCategory : checkTrueCategory
        },()=> {
            this.combiningFilter()
        })
        // this.state.filtered_list.push(checkTrueCategory[0])
        // console.log(this.state.filtered_list,checkTrueCategory[0])

        this.showCourses()
    }

    categoryFilter = (e) => {
      console.log(e.target.nextSibling.textContent,e.target.checked)

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
              console.log(this.state.category_list)

              let checkTrueCategory = this.checkTrueCategory()

              console.log('checkTrueCategory',checkTrueCategory)

              this.setState({
                  checkTrueCategory : checkTrueCategory
              },() => {
                  this.combiningFilter()
              })

              // this.setFilterList(this.state.category_list)

              // this.showCourses()
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
              console.log(this.state.category_list)

              let checkTrueCategory = this.checkTrueCategory()
              
              console.log('checkTrueCategory',checkTrueCategory)

              this.setState({
                checkTrueCategory : checkTrueCategory
              },() => {
                  this.combiningFilter()
              })

              // this.state.filtered_list.push(checkTrueCategory[0])

              // this.setFilterList(this.state.category_list)
              
              // this.showCourses()
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

    setFilterList(Data){
      console.log('Data',Data)

      let filtered_data = this.state.filtered_list

      // Data.map((item,key) => 
      //   (item.value) ? 
      //       filtered_data.map((subitem,key) =>  
      //           (item.label) === (subitem.label) ? 
      //               '' : filtered_data.push(item)
      //       ) 
      //       : 
      //       filtered_data.map((subitem,key) =>  
      //           (item.label) === (subitem.label) ? 
      //           filtered_data.pop(item) : ''
      //       ) 
      // )

      for(let i=0;i<Data.length;i++){
          if(Data[i].value){
             if(filtered_data.length > 0){
                for(let j=0;j<filtered_data.length;j++){
                    if(Data[i].label === filtered_data[j].label){
                        
                    }
                    else{
                        filtered_data.push(Data[i])
                    }
                }
             }
             else{
                filtered_data.push(Data[i])
             }
          }
          else{
              if(filtered_data.length > 0){
                  for(let j=0;j<filtered_data.length;j++){
                      if(Data[i].label === filtered_data[j].label){
                          filtered_data.pop(Data[i])
                      }
                      else{
                          
                      }
                  }
              }
          }
      }

      this.setState({
        filtered_list : filtered_data
      },()=> {
        console.log('filtered_data',this.state.filtered_list)
      })
      // TrueValues.map((item,key) => this.state.filtered_list.push(item))

      // console.log(JSON.stringify(this.removeDuplicate(this.state.filtered_list, item => item.label)))
      // console.log('this.state.filtered_list',this.state.filtered_list)
    }

    levelFilter = (e) => {
      console.log(e.target.nextSibling.textContent,e.target.checked)

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
        
        console.log('checkTrueLevel',checkTrueLevel)

        this.setState({
            checkTrueLevel : checkTrueLevel
        },()=>{
            this.combiningFilter()
        })

        // this.setFilterList(checkTrueLevel)

        // this.showCourses()
      })
    }


    checkTrueLevel(){
        let level_list = this.state.level_list
          
        let level_true_list = []

        level_list.map((item,key) => (item.value) ? level_true_list.push(item) : '' )
        
        return level_true_list;
    }

    

    priceFilter = (e) => {
      console.log(e.target.nextSibling.textContent,e.target.checked)

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



    combiningFilter(){
        let category = this.state.checkTrueCategory

        let level = this.state.checkTrueLevel

        let price = this.state.checkTruePrice

        let combinedArray = []

        combinedArray.push(...category,...level,...price)

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

      let course = []

      for (let index = 0; index < filtered_item.length; index++) {
          for(let i=0;i<overall_course_list.length;i++){
              // if(filtered_item[index].label === 'All'){
              //     course.push(overall_course_list[i])
              // }
              // else{
              //   if(filtered_item[index].label === overall_course_list[i].dataCategory){
              //     course.push(overall_course_list[i])
              //   }
              //   else if(filtered_item[index].label === overall_course_list[i].dataLevel){
              //     course.push(overall_course_list[i])
              //   }
              // }   
          }
      }
      // console.log('category_wise_course',category_wise_course)
      this.setState({
          FinalCourseList : course
      })
  }

    // PageLoadList(){
    //   let category_list = this.state.category_list

    //   let course_list = this.state.courses

    //   let final_list = []
    //   for(let i=0;i<category_list.length ;i++){
    //     if(category_list[i].value){
    //       let checked_label = category_list[i].label

    //       if(checked_label === 'All'){
    //         for(let j=0;j<course_list.length;j++){
    //           final_list.push(course_list[j])
    //         }
    //       }
    //       else{
    //         for(let j=0;j<course_list.length;j++){
    //             if(checked_label === course_list[j].dataCategory){
    //                 final_list.push(course_list[j])
    //             }
    //         }
    //       }
    //     }
    //   }
    //   console.log('final_list',final_list)

    //   this.setState({
    //     FinalCourseList : final_list
    //   },() => {

    //   })
    // }

    // categoryFilter = (e) => {
    //   console.log(e.target.nextSibling.textContent,e.target.checked)

    //   let selected_category = e.target.nextSibling.textContent

    //   let value = e.target.checked

    //   this.setState(prevState => ({
    //       category_list : prevState.category_list.map(
    //         el => el.label === selected_category ? {
    //           ...el,
    //           value : value
    //         }
    //         : 
    //         el
    //       ) 
    //   }),() => {
    //     console.log(this.state.category_list)
    //     this.PageLoadList()
    //   })
    // }

    // checkCategoryFilter(){
    //   let category_list = this.state.category_list

    //   let category_true_array = []
    //   for(let i=0;i<category_list.length;i++){
    //     if(category_list[i].value){
    //         category_true_array.push(category_list[i])
    //     }
    //   }
    //   return category_true_array;
    // }

    // pageAfterClickLevelFilter(){
    //   let level_list = this.state.level_list

    //   let course_list = this.state.courses

    //   let final_list = []
      
    //   let filer_by_category = this.checkCategoryFilter()
    //   console.log('filer_by_category',filer_by_category)
    //   for(let i=0;i<level_list.length ;i++){
    //     if(level_list[i].value){
    //       let checked_label = level_list[i].label
    //         for(let j=0;j<course_list.length;j++){
    //             if(checked_label === course_list[j].dataLevel){
    //                 final_list.push(course_list[j])
    //             }
    //         }
    //     }
    //   }
    //   console.log('final_list',final_list)

    //   this.setState({
    //     FinalCourseList : final_list
    //   })
    // }

    // pageAfterClickPriceFilter(){
    //   let price_list = this.state.price_list

    //   let course_list = this.state.courses

    //   let final_list = []
    //   for(let i=0;i<price_list.length ;i++){
    //     if(price_list[i].value){
    //       let checked_label = price_list[i].label
    //         for(let j=0;j<course_list.length;j++){
    //             if(checked_label === course_list[j].dataPrice){
    //                 final_list.push(course_list[j])
    //             }
    //         }
    //     }
    //   }
    //   console.log('final_list',final_list)

    //   this.setState({
    //     FinalCourseList : final_list
    //   })
    // }

    // pageAfterClickLanguageFilter(){
    //   let language_list = this.state.language_list

    //   let course_list = this.state.courses

    //   let final_list = []
    //   for(let i=0;i<language_list.length ;i++){
    //     if(language_list[i].value){
    //       let checked_label = language_list[i].label
    //         for(let j=0;j<course_list.length;j++){
    //             if(checked_label === course_list[j].dataLanguage){
    //                 final_list.push(course_list[j])
    //             }
    //         }
    //     }
    //   }
    //   console.log('final_list',final_list)

    //   this.setState({
    //     FinalCourseList : final_list
    //   })
    // }

    // levelFilter = (e) => {
    //   console.log(e.target.nextSibling.textContent,e.target.checked)

    //   let selected_category = e.target.nextSibling.textContent

    //   let value = e.target.checked
      
    //   this.setState(prevState => ({
    //       level_list : prevState.level_list.map(
    //         el => el.label === selected_category ? {
    //           ...el,
    //           value : value
    //         }
    //         : 
    //         el
    //       ) 
    //   }),() => {
    //     console.log(this.state.level_list)
    //     this.pageAfterClickLevelFilter()
    //   })
    // }

    // priceFilter = (e) => {
    //   console.log(e.target.nextSibling.textContent,e.target.checked)

    //   let selected_category = e.target.nextSibling.textContent

    //   let value = e.target.checked
      
    //   this.setState(prevState => ({
    //       price_list : prevState.price_list.map(
    //         el => el.label === selected_category ? {
    //           ...el,
    //           value : value
    //         }
    //         : 
    //         el
    //       ) 
    //   }),() => {
    //     console.log(this.state.price_list)
    //     this.pageAfterClickPriceFilter()
    //   })
    // }

    // languageFilter = (e) => {
    //   console.log(e.target.nextSibling.textContent,e.target.checked)

    //   let selected_category = e.target.nextSibling.textContent

    //   let value = e.target.checked
      
    //   this.setState(prevState => ({
    //       language_list : prevState.language_list.map(
    //         el => el.label === selected_category ? {
    //           ...el,
    //           value : value
    //         }
    //         : 
    //         el
    //       ) 
    //   }),() => {
    //     console.log(this.state.language_list)
    //     this.pageAfterClickLanguageFilter()
    //   })
    // }



    render() {
        const { FinalCourseList,category_list,level_list,price_list,language_list } = this.state;
        return (
          <>
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
                                                      <p className='mb-0 d-flex'>
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
          </>
          
        );
    }
}

export default App;