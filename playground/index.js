import React, {useState} from 'react'
import {render} from 'react-dom'
import Container from '../components/utility/layout/Container'
import Row from '../components/utility/layout/Row'
import Column from '../components/utility/layout/Column'
import CookieConsent from '../components/molecules/cookie-consent/CookieConsent'

const Playground = () => {

    // Get cookies from browser
    // Test object
    const getCookie = {
        set: false,
        experience: false,
        analytics: false,
        comms: false
    }

    const [accept, setAccepted] = useState(getCookie.set)
    const [cookie, cookieOpen] = useState(!accept)
    const [experienceSettings, setExperienceSettings] = useState(getCookie.experience)
    const [analyticsSettings, setAnalyticsSettings] = useState(getCookie.analytics)
    const [commsSettings, setCommsSettings] = useState(getCookie.comms)

    // User saves form
    const cookieData = e => {
        e.preventDefault()
        console.log(e.target.elements)
        console.log('Cookie data')
        setAccepted(true)
        cookieOpen(false)
    }

    // User selects all
    const enableAll = () => {
        setExperienceSettings(true)
        setAnalyticsSettings(true)
        setCommsSettings(true)
    }

    // User disables all
    const disableAll = () => {
        setExperienceSettings(false)
        setAnalyticsSettings(false)
        setCommsSettings(false)
    }

    // User selects toggles
    const handleChange = e => {

        switch (e.target.id) {
            case 'experience':
                setExperienceSettings(!experienceSettings)
                break
            case 'analytics':
                setAnalyticsSettings(!analyticsSettings)
                break
            case 'comms':
                setCommsSettings(!commsSettings)
                break
        }
    }

    return (
        <>
            <div className="playground-container">
                <div className="playground-container__item">
                    <Container>
                        <Row>
                            <Column xs={12}>
                                <CookieConsent
                                    cookiesSet={cookie}
                                    isOpen={cookie}
                                    experienceSet={experienceSettings}
                                    analyticsSet={analyticsSettings}
                                    commsSet={commsSettings}
                                    onChange={handleChange}
                                    enableAll={enableAll}
                                    disableAll={disableAll}
                                    cookieData={cookieData}
                                />
                            </Column>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
)