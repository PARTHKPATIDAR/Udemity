import axiosInstance from './axiosInstance';

export const fetchAssignments = async () => {
    try {
        const response = await axiosInstance.get('/assignments/assignments');
        return response.data;
    } catch (error) {
        console.error('Error fetching assignments:', error);
        throw error;
    }
};

export const fetchGrades = async () => {
    try {
        const response = await axiosInstance.get('/grades/grades');
        return response.data;
    } catch (error) {
        console.error('Error fetching grades:', error);
        throw error;
    }
};
