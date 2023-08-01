

// material-ui
import {

  Grid,

  Typography
} from '@mui/material';

// project import
import UserTable from '../dashboard/UserTable';

import MainCard from 'components/MainCard';

import AnalyticEcommerce from '../../components/cards/statistics/AnalyticEcommerce';







// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Pengguna= () => {
 


  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Pengguna </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={6}>
        <AnalyticEcommerce title="Jumlah Pengguna" count="72"  extra="detail" />
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Menggunakan Asset" count="70" color="secondary"  extra="detail" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Tidak Menggunakan Asset" count="2"  color="secondary" extra="detail" />
      </Grid>
     

      
      

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Daftar pengguna</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <UserTable />
        </MainCard>
      </Grid>
      </Grid>
     

  );
};

export default Pengguna;
