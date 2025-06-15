import axiosInstance from "../axios/axios.js";

const workspaceRepository = {
    findAll: async () => {
        return await axiosInstance.get("/workspace", { withCredentials: true });
    },
    findMine: async () => {
        return await axiosInstance.get("/workspace/my-workspaces", { withCredentials: true });
    },
    accessWorkspace: async (id) => {
        return await axiosInstance.get(`/workspace/${id}`, { withCredentials: true });
    },
    editWorkspace: async (id) => {
        return await axiosInstance.get(`/workspace/edit/${id}`, { withCredentials: true });
    },
    add: async (data) => {
        return await axiosInstance.post("/workspace/add", data, { withCredentials: true });
    },
    update: async (id, data) => {
        return await axiosInstance.put(`/workspace/edit/${id}`, data, { withCredentials: true });
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/workspace/delete/${id}`, { withCredentials: true });
    }
};

export default workspaceRepository;
