import { clientOnly } from 'vike-react/clientOnly';

const ClientOnlyLanguageProvider = clientOnly(
    async () => (await import('./languageContext')).LanguageProvider,
);

export default ({ children }: { children: React.ReactNode }) => (
    <ClientOnlyLanguageProvider>{children}</ClientOnlyLanguageProvider>
);
