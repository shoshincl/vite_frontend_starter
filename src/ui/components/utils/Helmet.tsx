import { Helmet as HelmetAsync } from 'react-helmet-async';

export default function Helmet({
  title,
  meta,
}: {
  title: string;
  meta: IMeta;
}) {
  return (
    <HelmetAsync>
      <title>{`${title} | ${import.meta.env.VITE_APP_NAME}`}</title>
      <meta name={meta.name} content={meta.content} />
    </HelmetAsync>
  );
}
