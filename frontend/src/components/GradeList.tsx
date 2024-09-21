import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGradesRequest } from '../actions';

const GradeList = () => {
    const dispatch = useDispatch();
    const grades = useSelector((state:any) => state.grades.grades);

    useEffect(() => {
        dispatch(fetchGradesRequest());
    }, [dispatch]);

    return (
        <div>
            <h2>Grades</h2>
            <ul>
                {grades.map((grade:any) => (
                    <li key={grade.id}>
                        {grade.user} - {grade.assignment} - {grade.grade}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GradeList;
