import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditWorkspaceDialog from "../EditWorkspaceDialog/EditWorkspaceDialog.jsx";
import DeleteProductDialog from "../DeleteWorkspaceDialog/DeleteProductDialog.jsx";
import {useNavigate} from "react-router";
import AccessWorkspaceDialog from "../AccessProductDialog/AccessWorkspaceDialog.jsx";

const WorkspaceCard = ({workspace, onEdit, onAccess}) => {
    const navigate = useNavigate();
    const [editWorkspaceDialogOpen, setEditWorkspaceDialogOpen] = useState(false);
    const [accessWorkspaceDialogOpen, setaccessWorkspaceDialogOpen] = useState(false);
    const [deleteProductDialogOpen, setDeleteProductDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{ boxShadow: 3, borderRadius: 0, p: 1, width: '100%',  }}  >
                <CardContent>
                    <Typography variant="h5">{workspace.name}</Typography>
                    <Typography variant="body2" sx={{textAlign: "right"}}>{workspace.description} </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "end"}}>
                    <Button
                        size="small"
                        color="primary"
                        startIcon={<InfoIcon/>}
                        onClick={() => setaccessWorkspaceDialogOpen(true)}
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
                                onClick={() => setEditWorkspaceDialogOpen(true)}
                            >
                                Edit
                            </Button>
                        )}
                    </Box>
                </CardActions>
            </Card>
            <EditWorkspaceDialog
                open={editWorkspaceDialogOpen}
                onClose={() => setEditWorkspaceDialogOpen(false)}
                workspace={workspace}
                onEdit={onEdit}
            />
            <AccessWorkspaceDialog
                open={accessWorkspaceDialogOpen}
                onClose={() => setaccessWorkspaceDialogOpen(false)}
                workspace={workspace}
            />
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