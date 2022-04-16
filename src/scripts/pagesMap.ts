import MainPage from '@/scripts/pages/main-page';
import SettingsPage from '@/scripts/pages/settings-page';
import StatPage from '@/scripts/pages/stat-page';
import ErrorPage from '@/scripts/pages/error-page';
import Page from '@/scripts/tempaltes/page';

interface PagesMap {
  [key: string]: typeof MainPage;
}

const PAGES_MAP: PagesMap = {
  main: MainPage,
  settings: SettingsPage,
  stat: StatPage,
  error: ErrorPage,
};

export default PAGES_MAP;
