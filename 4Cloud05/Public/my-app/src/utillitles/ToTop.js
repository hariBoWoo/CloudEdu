import React, { Component } from 'react'; 
import { withRouter } from 'react-router'; 

// 다른 페이지로 가게될 때 스크롤을 위로 올려주어서 표시하겟다.

class ToTop extends Component { 
    componentDidUpdate(prevProps) { 
        if (this.props.location !== prevProps.location) { 
            window.scrollTo(0, 0) 
        } 
    } 
    render() { 
        return this.props.children 
    } 
} 

export default withRouter(ToTop)