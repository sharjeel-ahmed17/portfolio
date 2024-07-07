import React from 'react'

import Layout from '../components/layout/Layout'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Hero from '../components/hero/Hero'

const Navigation = () => {
    return (
        <div>
            <Layout>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />

            </Layout>
        </div>
    )
}

export default Navigation