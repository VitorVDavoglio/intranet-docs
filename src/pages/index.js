import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const docCategories = [
  {
    label: 'Tutorial - Basics',
    path: '/docs/category/tutorial---basics',
    description: 'Conceitos fundamentais do Docusaurus',
  },
  {
    label: 'Tutorial - Extras',
    path: '/docs/category/tutorial---extras',
    description: 'Funcionalidades avançadas',
  },
  {
    label: 'C6 Bank',
    path: '/docs/category/c6-bank',
    description: 'Documentação do ecossistema C6 Bank na IB2B',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Portal de documentação IB2B">
      <div className={styles.heroSection}>
        <Heading as="h1" className={styles.heroTitle}>
          Documentação IB2B
        </Heading>
        <Link className={styles.primaryButton} to="/docs/intro">
          Primeiros passos
        </Link>
      </div>

      <main className={styles.categoriesSection}>
        <div className={styles.categoriesGrid}>
          {docCategories.map((cat) => (
            <Link key={cat.path} to={cat.path} className={styles.categoryCard}>
              <span className={styles.categoryLabel}>{cat.label}</span>
              <span className={styles.categoryDesc}>{cat.description}</span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
