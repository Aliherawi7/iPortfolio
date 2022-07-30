const posts = [
    {
        id:0,
        title: "Spring boot",
        pictureUrl: "/image/blog/spring-boot.png",
        author: "Ali Herawi",
        date: "2022-2-12",
        timeout: "8 minutes",
        comment: [{
            username: "James hart",
            date: "2022-3-4",
            comment: "thank you man its really helpful. please continue....",
            pictureUrl: "image/users/jame.png"
        }],
        postBody: {
            text: "Spring framework is a huge environment for building enterprise application",
        }
    },
    {
        id:1,
        title: "React js",
        pictureUrl: "/image/blog/react.png",
        author: "Ali Herawi",
        date: "2022-2-12",
        timeout: "8 minutes",
        comment: [{
            username: "James hart",
            date: "2022-3-4",
            comment: "thank you man its really helpful. please continue....",
            pictureUrl: "image/users/jame.png"
        }],
        postBody: {
            text: "React Js library or api is a huge environment for building web and mobile application",
        }
    },
    {
        id:2,
        title: "Microservices",
        pictureUrl: "/image/blog/spring-microservices.png",
        author: "Ali Herawi",
        date: "2022-2-12",
        timeout: "8 minutes",
        comment: [{
            username: "James hart",
            date: "2022-3-4",
            comment: "thank you man its really helpful. please continue....",
            pictureUrl: "image/users/jame.png"
        }],
        postBody: {
            text: "microservices are the common subject on spring boot framwork learning",
        }
    }
]

export const recentPosts = [
    {
        imgUrl: "/image/post/java.png",
        title: "Binary search in java",
        date:"January 12, 2019",
    },
    {
        imgUrl: "/image/post/spring-data-jpa.png",
        title: "Spring data jpa",
        date:"2 Hours ago",
    },
    {
        imgUrl: "/image/post/java.png",
        title: "React context api",
        date:"3 Hours ago",
    },
    {
        imgUrl: "/image/post/java.png",
        title: "Arrays in Javascript",
        date:"1 Hours ago",
    },
]
export const category = [
    {
        title: "Binary search in java",
        numbers: 7,
    },
    {
        title: "Spring boot",
        numbers: 5,
    },
    {
        title: "Javascript",
        numbers: 3,
    },
    {
        title: "React Js",
        numbers: 4,
    },
    {
        title: "Spring security",
        numbers: 2,
    },
]

export default posts