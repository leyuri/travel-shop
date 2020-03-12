import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {



    return (
        <div>
            <Search
                value
                onChange
                placeholder="Search By Typing..."
            />
        </div>
    )
}

export default SearchFeature