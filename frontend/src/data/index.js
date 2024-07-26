const data = {
  courses: [
    {
      "course_id": "101",
      "title": "Learn Python Programming",
      "description": "An introductory course to learn Python programming from scratch.",
      "instructor": {
        "name": "Alice Smith",
        "bio": "Alice Smith is an experienced Python developer and educator.",
        "profile_image_url": "https://example.com/instructor/alice_smith.jpg"
      },
      "price": 29.99,
      "currency": "USD",
      "language": "English",
      "level": "Beginner",
      "duration": "8 hours",
      "rating": 4.7,
      "reviews_count": 250,
      "thumbnail_url": "https://i.ytimg.com/vi/CScxy0294SE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDx1G4hpKwdqiy94l6vZlUD1jmMRQ.jpg",
      "category": "Programming",
      "tags": ["python", "programming", "beginner"],
      "content": [
        {
          "section_title": "Introduction",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "Welcome to the Course",
              "duration": "5 minutes",
              "video_url": "blob:https://www.youtube.com/90dc5cf3-8007-4bb1-bf68-b831fa528d8d",
              "resources": []
            },
            {
              "lecture_id": "2",
              "title": "Setting Up Python",
              "duration": "15 minutes",
              "video_url": "blob:https://www.youtube.com/19f367b7-3444-450c-90c8-9a1c49feb82f",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/setup_guide.pdf",
                  "title": "Python Setup Guide"
                }
              ]
            }
          ]
        },
        {
          "section_title": "Basic Concepts",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "Variables and Data Types",
              "duration": "20 minutes",
              "video_url": "blob:https://www.youtube.com/fc30450a-77c4-40db-a0dd-54eb84a0c393",
              "resources": []
            },
            {
              "lecture_id": "2",
              "title": "Control Structures",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            },
            {
              "lecture_id": "3",
              "title": "Loop, while",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            },
            {
              "lecture_id": "4",
              "title": "Regex expression",
              "duration": "15 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            },
            {
              "lecture_id": "5",
              "title": "Call back in JavaScripts",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            },
            {
              "lecture_id": "6",
              "title": "Higher order function",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            }
            , {
              "lecture_id": "7",
              "title": "Build in function with array",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            }
            , {
              "lecture_id": "8",
              "title": "Asynchronous and Synchronous",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            }
            , {
              "lecture_id": "9",
              "title": "ES6 in JavaScripts",
              "duration": "15 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            }
            , {
              "lecture_id": "10",
              "title": "Promise in JavaScript",
              "duration": "7 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            }
            ,
            {
              "lecture_id": "11",
              "title": "Async and await",
              "duration": "4 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            },
            {
              "lecture_id": "12",
              "title": "Practice with javascript",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            },
            {
              "lecture_id": "13",
              "title": "DOM",
              "duration": "25 minutes",
              "video_url": "blob:https://www.youtube.com/fb857069-0217-46ad-8a2c-6b932c1fcad9",
              "resources": []
            }

          ]
        }
      ],
      "enrollment_count": 1500,
      "published_date": "2022-06-01",
      "last_updated": "2023-01-15"
    },
    {
      "course_id": "103",
      "title": "Data Science with R",
      "description": "Comprehensive course on data science using the R programming language.",
      "instructor": {
        "name": "Charlie Kim",
        "bio": "Charlie Kim is a data scientist with expertise in R and machine learning.",
        "profile_image_url": "https://example.com/instructor/charlie_kim.jpg"
      },
      "price": 59.99,
      "currency": "USD",
      "language": "English",
      "level": "Intermediate",
      "duration": "10 hours",
      "rating": 4.6,
      "reviews_count": 180,
      "thumbnail_url": "https://i.ytimg.com/vi/PuOVqP_cjkE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1SyzuNeo3mI2cF9wD58tmE1Keng.jpg",
      "category": "Data Science",
      "tags": ["data science", "R", "machine learning"],
      "content": [
        {
          "section_title": "Introduction to Data Science",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "What is Data Science?",
              "duration": "15 minutes",
              "video_url": "https://example.com/video/intro_data_science",
              "resources": []
            }
          ]
        },
        {
          "section_title": "R Programming Basics",
          "lectures": [
            {
              "lecture_id": "2",
              "title": "Getting Started with R",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/intro_R",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/intro_r_guide.pdf",
                  "title": "Getting Started with R Guide"
                }
              ]
            }
          ]
        }
      ],
      "enrollment_count": 1000,
      "published_date": "2022-11-10",
      "last_updated": "2023-02-25"
    },
    {
      "course_id": "104",
      "title": "Web Development Bootcamp",
      "description": "A complete bootcamp to become a full-stack web developer.",
      "instructor": {
        "name": "Dana Lee",
        "bio": "Dana Lee is a full-stack developer and educator with a passion for teaching.",
        "profile_image_url": "https://example.com/instructor/dana_lee.jpg"
      },
      "price": 79.99,
      "currency": "USD",
      "language": "English",
      "level": "Beginner to Advanced",
      "duration": "20 hours",
      "rating": 4.9,
      "reviews_count": 500,
      "thumbnail_url": "https://i.ytimg.com/vi/Gc4Xh8u19NU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAupiiZhHKczUPq-8n5GvjoLdCFFA.jpg",
      "category": "Web Development",
      "tags": ["web development", "full-stack", "bootcamp"],
      "content": [
        {
          "section_title": "HTML & CSS",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "Introduction to HTML",
              "duration": "10 minutes",
              "video_url": "https://example.com/video/intro_html",
              "resources": []
            },
            {
              "lecture_id": "2",
              "title": "Styling with CSS",
              "duration": "15 minutes",
              "video_url": "https://example.com/video/intro_css",
              "resources": []
            }
          ]
        },
        {
          "section_title": "JavaScript",
          "lectures": [
            {
              "lecture_id": "3",
              "title": "JavaScript Basics",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/js_basics",
              "resources": []
            }
          ]
        }
      ],
      "enrollment_count": 3000,
      "published_date": "2023-03-01",
      "last_updated": "2023-05-10"
    },
    {
      "course_id": "105",
      "title": "Machine Learning with Python",
      "description": "Learn machine learning concepts and techniques using Python.",
      "instructor": {
        "name": "Eva Brown",
        "bio": "Eva Brown is a machine learning engineer with extensive experience in Python.",
        "profile_image_url": "https://example.com/instructor/eva_brown.jpg"
      },
      "price": 69.99,
      "currency": "USD",
      "language": "English",
      "level": "Intermediate",
      "duration": "15 hours",
      "rating": 4.8,
      "reviews_count": 400,
      "thumbnail_url": "https://i.ytimg.com/vi/7eh4d6sabA0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN1JWolqLLX-BgZBhYx9w-hGPj_Q.jpg",
      "category": "Machine Learning",
      "tags": ["machine learning", "python", "data science"],
      "content": [
        {
          "section_title": "Introduction to Machine Learning",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "What is Machine Learning?",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/intro_ml",
              "resources": []
            }
          ]
        },
        {
          "section_title": "Python for Machine Learning",
          "lectures": [
            {
              "lecture_id": "2",
              "title": "Python Basics for ML",
              "duration": "30 minutes",
              "video_url": "https://example.com/video/python_basics_ml",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/python_ml_guide.pdf",
                  "title": "Python Basics for Machine Learning Guide"
                }
              ]
            }
          ]
        }
      ],
      "enrollment_count": 2500,
      "published_date": "2022-05-20",
      "last_updated": "2023-04-05"
    },
    {
      "course_id": "106",
      "title": "Machine Learning with Python",
      "description": "Learn machine learning concepts and techniques using Python.",
      "instructor": {
        "name": "Eva Brown",
        "bio": "Eva Brown is a machine learning engineer with extensive experience in Python.",
        "profile_image_url": "https://example.com/instructor/eva_brown.jpg"
      },
      "price": 69.99,
      "currency": "USD",
      "language": "English",
      "level": "Intermediate",
      "duration": "15 hours",
      "rating": 4.8,
      "reviews_count": 400,
      "thumbnail_url": "https://i.ytimg.com/vi/7eh4d6sabA0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN1JWolqLLX-BgZBhYx9w-hGPj_Q.jpg",
      "category": "Machine Learning",
      "tags": ["machine learning", "python", "data science"],
      "content": [
        {
          "section_title": "Introduction to Machine Learning",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "What is Machine Learning?",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/intro_ml",
              "resources": []
            }
          ]
        },
        {
          "section_title": "Python for Machine Learning",
          "lectures": [
            {
              "lecture_id": "2",
              "title": "Python Basics for ML",
              "duration": "30 minutes",
              "video_url": "https://example.com/video/python_basics_ml",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/python_ml_guide.pdf",
                  "title": "Python Basics for Machine Learning Guide"
                }
              ]
            }
          ]
        }
      ],
      "enrollment_count": 2500,
      "published_date": "2022-05-20",
      "last_updated": "2023-04-05"
    },
    {
      "course_id": "107",
      "title": "Machine Learning with Python",
      "description": "Learn machine learning concepts and techniques using Python.",
      "instructor": {
        "name": "Eva Brown",
        "bio": "Eva Brown is a machine learning engineer with extensive experience in Python.",
        "profile_image_url": "https://example.com/instructor/eva_brown.jpg"
      },
      "price": 69.99,
      "currency": "USD",
      "language": "English",
      "level": "Intermediate",
      "duration": "15 hours",
      "rating": 4.8,
      "reviews_count": 400,
      "thumbnail_url": "https://i.ytimg.com/vi/7eh4d6sabA0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN1JWolqLLX-BgZBhYx9w-hGPj_Q.jpg",
      "category": "Machine Learning",
      "tags": ["machine learning", "python", "data science"],
      "content": [
        {
          "section_title": "Introduction to Machine Learning",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "What is Machine Learning?",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/intro_ml",
              "resources": []
            }
          ]
        },
        {
          "section_title": "Python for Machine Learning",
          "lectures": [
            {
              "lecture_id": "2",
              "title": "Python Basics for ML",
              "duration": "30 minutes",
              "video_url": "https://example.com/video/python_basics_ml",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/python_ml_guide.pdf",
                  "title": "Python Basics for Machine Learning Guide"
                }
              ]
            }
          ]
        }
      ],
      "enrollment_count": 2500,
      "published_date": "2022-05-20",
      "last_updated": "2023-04-05"
    },
    {
      "course_id": "108",
      "title": "Machine Learning with Python",
      "description": "Learn machine learning concepts and techniques using Python.",
      "instructor": {
        "name": "Eva Brown",
        "bio": "Eva Brown is a machine learning engineer with extensive experience in Python.",
        "profile_image_url": "https://example.com/instructor/eva_brown.jpg"
      },
      "price": 69.99,
      "currency": "USD",
      "language": "English",
      "level": "Intermediate",
      "duration": "15 hours",
      "rating": 4.8,
      "reviews_count": 400,
      "thumbnail_url": "https://i.ytimg.com/vi/7eh4d6sabA0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN1JWolqLLX-BgZBhYx9w-hGPj_Q.jpg",
      "category": "Machine Learning",
      "tags": ["machine learning", "python", "data science"],
      "content": [
        {
          "section_title": "Introduction to Machine Learning",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "What is Machine Learning?",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/intro_ml",
              "resources": []
            }
          ]
        },
        {
          "section_title": "Python for Machine Learning",
          "lectures": [
            {
              "lecture_id": "2",
              "title": "Python Basics for ML",
              "duration": "30 minutes",
              "video_url": "https://example.com/video/python_basics_ml",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/python_ml_guide.pdf",
                  "title": "Python Basics for Machine Learning Guide"
                }
              ]
            }
          ]
        }
      ],
      "enrollment_count": 2500,
      "published_date": "2022-05-20",
      "last_updated": "2023-04-05"
    },
    {
      "course_id": "109",
      "title": "Machine Learning with Python",
      "description": "Learn machine learning concepts and techniques using Python.",
      "instructor": {
        "name": "Eva Brown",
        "bio": "Eva Brown is a machine learning engineer with extensive experience in Python.",
        "profile_image_url": "https://example.com/instructor/eva_brown.jpg"
      },
      "price": 69.99,
      "currency": "USD",
      "language": "English",
      "level": "Intermediate",
      "duration": "15 hours",
      "rating": 4.8,
      "reviews_count": 400,
      "thumbnail_url": "https://i.ytimg.com/vi/7eh4d6sabA0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN1JWolqLLX-BgZBhYx9w-hGPj_Q.jpg",
      "category": "Machine Learning",
      "tags": ["machine learning", "python", "data science"],
      "content": [
        {
          "section_title": "Introduction to Machine Learning",
          "lectures": [
            {
              "lecture_id": "1",
              "title": "What is Machine Learning?",
              "duration": "20 minutes",
              "video_url": "https://example.com/video/intro_ml",
              "resources": []
            }
          ]
        },
        {
          "section_title": "Python for Machine Learning",
          "lectures": [
            {
              "lecture_id": "2",
              "title": "Python Basics for ML",
              "duration": "30 minutes",
              "video_url": "https://example.com/video/python_basics_ml",
              "resources": [
                {
                  "type": "pdf",
                  "url": "https://example.com/resources/python_ml_guide.pdf",
                  "title": "Python Basics for Machine Learning Guide"
                }
              ]
            }
          ]
        }
      ],
      "enrollment_count": 2500,
      "published_date": "2022-05-20",
      "last_updated": "2023-04-05"
    }
  ],
}

let loadData = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export { loadData }

export default data