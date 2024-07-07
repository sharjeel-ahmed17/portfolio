import React from 'react'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'

const Navigation = () => {
    return (
        <div>
            <Layout>
                <About />
                <Projects />
                <Skills />
                <Contact />

            </Layout>
        </div>
    )
}

export default Navigation