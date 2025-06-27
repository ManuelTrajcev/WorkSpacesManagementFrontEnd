import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditProductDialog from "../EditWorkspaceDialog/EditProductDialog.jsx";
import DeleteProductDialog from "../DeleteWorkspaceDialog/DeleteProductDialog.jsx";
import {useNavigate} from "react-router";

const WorkspaceCard = ({workspace, onEdit, onAccess}) => {
    const navigate = useNavigate();
    const [editProductDialogOpen, setEditProductDialogOpen] = useState(false);
    const [deleteProductDialogOpen, setDeleteProductDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{workspace.name}</Typography>
                    <Typography variant="body2" sx={{textAlign: "right"}}>{workspace.description} </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/workspace/${workspace.id}`)}
                    >
                        View
                    </Button>
                    <Box>
                        {workspace.role === 'ROLE_ADMIN' && (
                            <Button
                                size="small"
                                color="warning"
                                startIcon={<EditIcon />}
                                sx={{ mr: "0.25rem" }}
                                onClick={() => setEditProductDialogOpen(true)}
                            >
                                Edit
                            </Button>
                        )}
                    </Box>
                </CardActions>
            </Card>
            <EditProductDialog
                open={editProductDialogOpen}
                onClose={() => setEditProductDialogOpen(false)}
                workspace={workspace}
                onEdit={onEdit}
            />
            {/*/>*/}
            {/*<DeleteProductDialog*/}
            {/*    open={deleteProductDialogOpen}*/}
            {/*    onClose={() => setDeleteProductDialogOpen(false)}*/}
            {/*    product={product}*/}
            {/*    onDelete={onDelete}*/}
            {/*/>*/}
        </>
    );
};

export default WorkspaceCard;