import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
    <div className={styles.User}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default () => (
    <Container>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="Blah blah blah blah blah"
        />
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="stuf stuff stuff stuff"
        />
        <h1>About CSS Modules</h1>
        <p>CSS modules info</p>
    </Container>
)