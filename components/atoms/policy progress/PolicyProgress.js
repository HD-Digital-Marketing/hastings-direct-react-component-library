import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './policy-progress.scss'

const PolicyProgress = props => {

    const {
        progress = 0, // Out of 120 (12 months)
        startDate = '',
        endDate = '',
        expired = false,
        cancelled = false,
        willStart = false,
        className = ''
    } = props

    const progressPolicyClass = classNames('a-policy-progress', className, {
        'a-policy-progress--error': expired || cancelled
    })

    let progressContent;
    let progressValue;

    if (progress && !willStart) {
        progressValue = progress
    } else if (expired || cancelled) {
        progressValue = 120
    } else {
        progressValue = 0
    }

    if (expired) {
        progressContent = <div className="a-policy-progress__note">This policy expired on {endDate}</div>
    } else if (cancelled) {
        progressContent = <div className="a-policy-progress__note">This policy was cancelled on {endDate}</div>
    } else if (willStart) {
        progressContent = <div className="a-policy-progress__note">This policy will start on {startDate}</div>
    } else {
        progressContent = <div className="a-policy-progress__note"><span className="a-policy-progress__start">{startDate}</span><span className="a-policy-progress__end">{startDate}</span></div>
    }

    return(
        <div className={progressPolicyClass}>
            <progress className="a-policy-progress__bar" value={progressValue} max="120">{progress}</progress>
            {progressContent}
        </div>
    )
}

PolicyProgress.propTypes = {
    progress: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    expired: PropTypes.bool,
    cancelled: PropTypes.bool,
    willStart: PropTypes.bool,
    className: PropTypes.string
}

export default PolicyProgress
