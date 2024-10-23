import React from 'react';
import './Sidebar.scss';

import { ReactComponent as DashboardIcon } from '../../img/home.svg';
import { ReactComponent as TransactionsIcon } from '../../img/transfer.svg';
import { ReactComponent as AccountsIcon } from '../../img/user.svg';
import { ReactComponent as InvestmentsIcon } from '../../img/economic-investment.svg';
import { ReactComponent as CreditCardsIcon } from '../../img/credit-card.svg';
import { ReactComponent as LoansIcon } from '../../img/loan.svg';
import { ReactComponent as ServicesIcon } from '../../img/service.svg';
import { ReactComponent as PrivilegesIcon } from '../../img/econometrics.svg';
import { ReactComponent as SettingsIcon } from '../../img/setting.svg';

const Sidebar = ({ setCurrentSection, activeSection, isSidebarOpen }) => {
  return (
    <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul>
        <li
          className={activeSection === 'Dashboard' ? 'active' : ''}
          onClick={() => setCurrentSection('Dashboard')}
        >
          <DashboardIcon className="icon" />
          Dashboard
        </li>
        <li
          className={activeSection === 'Transactions' ? 'active' : ''}
          onClick={() => setCurrentSection('Transactions')}
        >
          <TransactionsIcon className="icon" />
          Transactions
        </li>
        <li
          className={activeSection === 'Accounts' ? 'active' : ''}
          onClick={() => setCurrentSection('Accounts')}
        >
          <AccountsIcon className="icon" />
          Accounts
        </li>
        <li
          className={activeSection === 'Investments' ? 'active' : ''}
          onClick={() => setCurrentSection('Investments')}
        >
          <InvestmentsIcon className="icon" />
          Investments
        </li>
        <li
          className={activeSection === 'Credit Cards' ? 'active' : ''}
          onClick={() => setCurrentSection('Credit Cards')}
        >
          <CreditCardsIcon className="icon" />
          Credit Cards
        </li>
        <li
          className={activeSection === 'Loans' ? 'active' : ''}
          onClick={() => setCurrentSection('Loans')}
        >
          <LoansIcon className="icon" />
          Loans
        </li>
        <li
          className={activeSection === 'Services' ? 'active' : ''}
          onClick={() => setCurrentSection('Services')}
        >
          <ServicesIcon className="icon" />
          Services
        </li>
        <li
          className={activeSection === 'My Privileges' ? 'active' : ''}
          onClick={() => setCurrentSection('My Privileges')}
        >
          <PrivilegesIcon className="icon" />
          My Privileges
        </li>
        <li
          className={activeSection === 'Setting' ? 'active' : ''}
          onClick={() => setCurrentSection('Setting')}
        >
          <SettingsIcon className="icon" />
          Setting
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
