import type { Metadata } from "next";
import JPTourHome, { type Locale } from "@/components/JPTourHome";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }, { locale: "ja" }];
}

const localizedMetadata: Record<Locale, Metadata> = {
  zh: {
    title: "JPTour | 日本小团一日游",
    description: "用舒服的节奏，探索京都、奈良和大阪的小团一日游。",
  },
  en: {
    title: "JPTour | Small-group days in Japan",
    description: "Thoughtfully paced small-group day tours in Kyoto, Nara and Osaka.",
  },
  ja: {
    title: "JPTour | 京都・奈良・大阪の少人数ツアー",
    description: "京都、奈良、大阪を心地よいペースで巡る少人数一日ツアー。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return localizedMetadata[locale === "en" || locale === "ja" ? locale : "zh"];
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "en" || locale === "ja" ? locale : "zh";
  return <JPTourHome locale={currentLocale} />;
}
