import Header from '@/app/components/header';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import AddCompanyButton from '@/app/components/add-company-button';
import { Status } from '@/app/components/status-label';

function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'24-02-2022'}
        />
      </CompanyTable>
    </>
  );
}

export default Page;
