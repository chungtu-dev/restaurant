import React from 'react'
import '../../../styles/loading.css'

const Loading = () => {
    return (
        <div class="spinner-box">
            <div class="configure-border-1">
                <div class="configure-core"></div>
            </div>
            <div class="configure-border-2">
                <div class="configure-core"></div>
            </div>
        </div>
    )
}

export default Loading