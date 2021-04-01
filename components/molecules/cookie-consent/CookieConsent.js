import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon/Icon'
import classNames from 'classnames'
import './cookie-consent.scss'
import ShieldTick from '../../../src/img/icons/shield_tick.svg'
import ChevLeft from '../../../src/img/icons/chevron_left.svg'
import Header from '../../atoms/header/Header'
import Button from '../../atoms/button/Button'
import Link from '../../atoms/link/Link'
import Toggle from '../../atoms/toggle/Toggle'

const CookieConsent = props => {

    const {
        isOpen = false,
        cookiesSet = false,
        experienceSet = false,
        analyticsSet = false,
        commsSet = false,
        disableAll,
        enableAll,
        onChange,
        cookieData,
        className
    } = props

    const [cookieSettings, setCookieSettings] = useState(!cookiesSet)

    const chooseSettings = () => {
        setCookieSettings(!cookieSettings)
    }

    const cookieConsentClass = classNames('m-cookie__wrap', className, {
        'm-cookie__wrap--show': isOpen
    })

    const RenderCookieScreen = () => {
        return (
            <>
                <div className="m-cookie__header">
                    <div>
                        <Header headerSize="h2"><Icon
                            svgImage={ShieldTick}
                            svgWidth={45}
                            svgHeight={45}
                            svgFill="#0e838a"
                            className="m-cookie__icon"
                        /> Privacy controls</Header>
                    </div>
                </div>

                <div className="m-cookie__body">
                    <p>We use cookies and similar technologies to make our site work; things like keeping you logged into MyAccount and enabling webchat. We’d also like to set optional cookies to see what pages you visit, recognise and remember your preferences and let you customise your experience.</p>
                    <p>For more details, <Link href="#" theme="primary">see our cookies & similar technology policy</Link></p>
                </div>

                <div className="m-cookie__footer">
                    <Button type="submit" theme="primary" className="a-btn--block" value="accept-all">Accept settings</Button>
                    <Button theme="secondary" className="a-btn--block" onClick={chooseSettings}>Choose settings</Button>
                </div>
            </>
        )
    }

    const RenderCookieSettingsScreen = () => {
        return (
            <>
                 <span className="a-link" onClick={chooseSettings}>
                        <Icon
                            svgImage={ChevLeft}
                            svgWidth={15}
                            svgHeight={15}
                            svgFill="#0085ff"
                            className="m-cookie__icon"
                        /> Go back
                </span>
                <div className="m-cookie__header">
                    <div>
                        <Header headerSize="h2">Privacy settings <Icon
                            svgImage={ShieldTick}
                            svgWidth={45}
                            svgHeight={45}
                            svgFill="#0e838a"
                            className="m-cookie__icon m-cookie__icon--settings"
                        /></Header>
                    </div>
                </div>

                <div className="m-cookie__body">
                    <p style={{marginBottom: '2em'}}>Let us know which settings you’re happy with applying to this device. We'll use a cookie to save your settings.</p>
                    <Header headerSize="h4">Essential functions</Header>
                    <p>These cookies are necessary to enable the website to function and cannot be switched off. This includes cookies which we use to provide you with core services and features, to help keep our website secure and to help us detect fraud or crime.</p>
                    <hr/>
                    <Header headerSize="h4">Preferences and experience</Header>
                    <p>These cookies do things like remember your preferences and the choices you make, to personalise your experience of using the site.</p>
                    <Toggle nameRight="Experience" id="experience" singleChoice={true} showState={true} checked={experienceSet} className="a-toggle--small" {...{onChange}} />
                    <hr/>
                    <Header headerSize="h4">Learning and analytics</Header>
                    <p>Information about how you use our website. We use this data to help make our websites and products better.</p>
                    <Toggle nameRight="Analytics" id="analytics" singleChoice={true} showState={true} checked={analyticsSet} className="a-toggle--small" {...{onChange}} />
                    <hr/>
                    <Header headerSize="h4">Communication & marketing</Header>
                    <p>These cookies run reporting tools that gather information from people on our website. These help us maintain relevant communication with you and show it appropriately</p>
                    <Toggle nameRight="Comms & data" id="comms" singleChoice={true} showState={true} checked={commsSet} className="a-toggle--small" {...{onChange}} />
                    <hr/>
                    <Header headerSize="h4">Disable / enable all</Header>
                    <p>Set preferences for all controls</p>
                    <Button theme="tertiary" onClick={disableAll}>Disable all</Button>&nbsp;&nbsp;<Button theme="secondary" onClick={enableAll}>Enable all</Button>
                </div>

                <div className="m-cookie__footer">
                    <hr/>
                    <Button type="submit" theme="primary" className="a-btn--block" deafultValue="accept-some">Save and return</Button>
                </div>
            </>
        )
    }

    return ReactDOM.createPortal(
        <>
            <div className={cookieConsentClass}>
                <div className={`m-cookie ${cookieSettings ? 'm-cookie--settings' : ''}`}>
                    <form className="m-cookie__container" onSubmit={cookieData}>
                        {cookieSettings ? <RenderCookieSettingsScreen/> : <RenderCookieScreen/>}
                    </form>
                </div>
            </div>
        </>, document.body
    )
}

CookieConsent.propTypes = {
    isOpen: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node
}

export default CookieConsent