import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import { Search as SearchIcon } from '../../icons/search';
  import { Upload as UploadIcon } from '../../icons/upload';
  import { Download as DownloadIcon } from '../../icons/download';
  import AddIcon from '@mui/icons-material/Add';
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import router from 'next/router';
  
  export const ProjectListToolbar = (props) => {
  
    function onClickHandle(e) {
      router.push('/project');
      console.log('You clicked');
    }
  
  
    return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Projects
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            // color="primary"
            // variant="contained"
            // onClick={onClickHandle}
            startIcon={(<EditIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
           Edit
          </Button>
          <Button
            // color="primary"
            // variant="outlined"
            onClick={onClickHandle}
            startIcon={(<DeleteIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Delete
          </Button>
  
  
          <Button
            color="primary"
            variant="contained"
            onClick={onClickHandle}
            startIcon={(<AddIcon fontSize='small' />)}
          >
            Add Project
          </Button>
  
  
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search report"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
              }
  