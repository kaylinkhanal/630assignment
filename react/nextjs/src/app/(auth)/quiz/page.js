
'use client'
import React, { useEffect,useState } from 'react'

const Quiz = () => {
    const [questions, setQuestions] =useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [userScore ,setUserScore] = useState(0)
    const intenship = [
        {
          "id": "1",
          "title": "Marketing Intern",
          "company": "InnovateTech Solutions",
          "location": "San Francisco, CA",
          "duration": "3 months",
          "applicationDeadline": "2024-10-15",
          "description": "Join our marketing team to assist with campaign strategies and market research.",
          "applyLink": "https://example.com/apply/marketing-intern"
        },
        {
          "id": "2",
          "title": "Software Development Intern",
          "company": "TechVision Inc.",
          "location": "Remote",
          "duration": "6 months",
          "applicationDeadline": "2024-11-01",
          "description": "Work on exciting projects with our software development team. Gain hands-on experience with cutting-edge technologies.",
          "applyLink": "https://example.com/apply/software-development-intern"
        },
        {
          "id": "3",
          "title": "Graphic Design Intern",
          "company": "Creative Minds Studio",
          "location": "New York, NY",
          "duration": "4 months",
          "applicationDeadline": "2024-10-30",
          "description": "Assist in designing promotional materials and branding strategies for various clients.",
          "applyLink": "https://example.com/apply/graphic-design-intern"
        },
        {
          "id": "4",
          "title": "Data Analyst Intern",
          "company": "DataDriven Corp",
          "location": "Chicago, IL",
          "duration": "3 months",
          "applicationDeadline": "2024-09-20",
          "description": "Analyze data to help our team make data-driven decisions. Experience in SQL and Excel is a plus.",
          "applyLink": "https://example.com/apply/data-analyst-intern"
        }
      ]
    useEffect(()=>{
setQuestions([
      {
        "question": "Who was the founder of the Shah dynasty in Nepal?",
        "options": [
          "Prithvi Narayan Shah",
          "King Tribhuvan",
          "King Birendra",
          "King Mahendra"
        ],
        "answer": "Prithvi Narayan Shah"
      },
      {
        "question": "In which year did Nepal officially become a federal democratic republic?",
        "options": [
          "1990",
          "2001",
          "2008",
          "2015"
        ],
        "answer": "2008"
      },
      {
        "question": "What was the name of the treaty that established the Sugauli Treaty between Nepal and the British East India Company?",
        "options": [
          "Treaty of Trianon",
          "Treaty of Sugauli",
          "Treaty of Versailles",
          "Treaty of Paris"
        ],
        "answer": "Treaty of Sugauli"
      },
      {
        "question": "Which historical figure is known for his efforts in unifying the various small principalities into modern Nepal?",
        "options": [
          "Jang Bahadur Rana",
          "Chandra Sekher Azad",
          "Prithvi Narayan Shah",
          "Gorkha King"
        ],
        "answer": "Prithvi Narayan Shah"
      },
      {
        "question": "What was the name of the political party that led Nepal’s transition from a monarchy to a democratic republic?",
        "options": [
          "Nepali Congress",
          "Communist Party of Nepal (Maoist)",
          "Rastriya Prajatantra Party",
          "National Democratic Party"
        ],
        "answer": "Communist Party of Nepal (Maoist)"
      },
      {
        "question": "Which event marked the end of the Rana era in Nepal?",
        "options": [
          "The signing of the Sugauli Treaty",
          "The 1951 revolution",
          "The end of the British Raj",
          "The election of the first president"
        ],
        "answer": "The 1951 revolution"
      },
      {
        "question": "Who was the first king of the Shah dynasty to rule after the unification of Nepal?",
        "options": [
          "King Pratap Singh Shah",
          "King Tribhuvan",
          "King Birendra",
          "King Prithvi Narayan Shah"
        ],
        "answer": "King Prithvi Narayan Shah"
      },
      {
        "question": "Which major earthquake devastated Nepal in 2015?",
        "options": [
          "The 2015 Gorkha Earthquake",
          "The 2011 Nepal Earthquake",
          "The 2009 Kathmandu Earthquake",
          "The 2008 Lumbini Earthquake"
        ],
        "answer": "The 2015 Gorkha Earthquake"
      },
      {
        "question": "What was the significance of the year 1950 for Nepal?",
        "options": [
          "The signing of the Sugauli Treaty",
          "The establishment of the Rana rule",
          "The beginning of democratic reforms and the end of the Rana era",
          "The unification of the Gorkha Kingdom"
        ],
        "answer": "The beginning of democratic reforms and the end of the Rana era"
      },
      {
        "question": "Which of the following was the ruling system in Nepal before the establishment of democracy in 1951?",
        "options": [
          "Monarchy",
          "Feudalism",
          "Rana oligarchy",
          "Republicanism"
        ],
        "answer": "Rana oligarchy"
      }
    ]
  )
    },[])

    const saveAnswers = (ans)=>{
        if(ans ===    questions[currentIndex]?.answer){
            setUserScore(userScore +1)
        }
        setCurrentIndex(currentIndex+1)
    }
  return (
    <div>
{intenship.map((item)=>{
    return (
        <div>
            {item.company}
        </div>
    )
})}
        <input placeholder='Generate Questions and answers for quiz'/>
        {questions[currentIndex]?.question}
        {questions[currentIndex]?.options?.map((item)=> {
            return <div onClick={()=> saveAnswers(item)} className='bg-teal-200 m-4 p-4'>
                {item}
            </div>
        })}
        {userScore}
    </div>
  )
}

export default Quiz