import React from 'react';
import './paginator.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setPage} from "../../store/devicesSlice";

const Paginator = () => {

    const {page, totalCount, limit} = useAppSelector(state => state.device)
    const dispatch = useAppDispatch()
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className='paginator-wrapper'>
            {pages.map((p) =>
                <div onClick={() => dispatch(setPage(p))} key={p}
                     className={p===page? 'paginator-item page-active': 'paginator-item'}>
                    {p}
                </div>)}
        </div>
    );
};

export default Paginator;