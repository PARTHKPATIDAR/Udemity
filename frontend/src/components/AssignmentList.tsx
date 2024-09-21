import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssignmentsRequest } from '../actions';

const AssignmentList = () => {
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignments.assignments);
    const loading = useSelector((state) => state.assignments.loading);
    const error = useSelector((state) => state.assignments.error);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            dispatch(fetchAssignmentsRequest());
        }
    }, [dispatch, token, navigate]); // Removed history from dependency array

    useEffect(() => {
        assignments.map((assignment)=>(
            console.log("id",assignment.id,"title",assignment.title)
        ))
    }, [assignments]);
    return (
        <div>
            <h2>Assignments</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {assignments && assignments.map((assignment) => (
                    <li key={assignment.id}>{assignment.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default AssignmentList;
