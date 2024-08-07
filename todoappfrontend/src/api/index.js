import axios from 'axios'
export const getTasks = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/tareas/');
        const data = response.data
        return data
    } catch (error) {
        console.log(error);
    }

}

export const addTask = async (description) => {
    const data = {
        description
    }
    try {
        const response = await axios.post('http://localhost:8000/api/tareas/', data);
    } catch (error) {
        console.log(error);
    }
}
export const deleteTAsk = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/api/tareas/${id}`)
    } catch (error) {

    }
}