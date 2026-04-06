'use client';

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Wrench,
  Car,
  Search,
  ShieldCheck,
  CircleCheck,
  ChevronRight,
  Menu,
  X,
  MessageSquare,
  FileText,
  Gauge,
  BadgeEuro,
} from "lucide-react";

const company = {
  name: "CAREVO",
  tagline: "Avec vous toujours plus pro",
  phone: "06 80 93 99 54",
  email: "contact@carevo.fr",
  address: "7 Rue des Forges, 52340 Biesles",
  hours: [
    "Lundi : 09h00 - 12h00 / 14h00 - 18h00",
    "Mardi : 09h00 - 12h00 / 14h00 - 18h00",
    "Mercredi : 09h00 - 12h00 / 14h00 - 18h00",
    "Jeudi : 09h00 - 12h00 / 14h00 - 18h00",
    "Vendredi : 09h00 - 12h00 / 14h00 - 18h00",
    "Samedi : 09h00 - 12h00",
  ],
};

const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "atelier", label: "Atelier" },
  { id: "vehicules", label: "Véhicules" },
  { id: "parebrise", label: "Pare-brise" },
  { id: "avis", label: "Avis" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    icon: Wrench,
    title: "Entretien & réparation",
    description:
      "Vidange, freins, pneus, distribution, embrayage, batterie et entretien courant avec un vrai accompagnement client.",
    bullets: ["Révisions", "Freinage", "Pneumatiques", "Distribution"],
  },
  {
    icon: Search,
    title: "Diagnostic électronique",
    description:
      "Recherche de panne précise pour identifier rapidement l’origine du problème et éviter les remplacements inutiles.",
    bullets: ["Voyants moteur", "Pannes intermittentes", "Contrôles ciblés", "Lecture défauts"],
  },
  {
    icon: ShieldCheck,
    title: "Pare-brise",
    description:
      "Remplacement de vitrage et accompagnement administratif pour une prise en charge claire et rapide.",
    bullets: ["Remplacement", "Impact", "Démarches", "Suivi client"],
  },
  {
    icon: Car,
    title: "Achat / vente / reprise",
    description:
      "Accompagnement sur l’achat, la vente ou la reprise de véhicules avec une approche rassurante et professionnelle.",
    bullets: ["Reprise", "Conseil", "Sélection", "Mise en vente"],
  },
];

const stats = [
  { value: "Réponse rapide", label: "sur vos demandes" },
  { value: "Approche claire", label: "sans jargon inutile" },
  { value: "Image premium", label: "et professionnelle" },
  { value: "Service local", label: "à taille humaine" },
];

const steps = [
  {
    title: "1. Premier contact",
    text: "Vous expliquez votre besoin par téléphone, message ou formulaire.",
  },
  {
    title: "2. Analyse précise",
    text: "Nous vous orientons vers la bonne intervention avec un discours simple et direct.",
  },
  {
    title: "3. Devis clair",
    text: "Vous recevez une proposition compréhensible avec une logique pro et carrée.",
  },
  {
    title: "4. Prise en charge",
    text: "Le véhicule est traité avec sérieux, efficacité et suivi client.",
  },
];

const reviews = [
  {
    name: "Client local",
    text: "Garage sérieux, communication claire et intervention propre. On sent une vraie volonté de bien faire.",
  },
  {
    name: "Client entretien",
    text: "Très bon accueil, explications simples et sensation d’être conseillé honnêtement.",
  },
  {
    name: "Client vente auto",
    text: "Approche professionnelle, rassurante et efficace. Très bonne image de confiance.",
  },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</div>
      <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-slate-950">{title}</h2>
      {text ? <p className="mt-5 text-base md:text-lg text-slate-600 leading-8">{text}</p> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[28px] border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

export default function CarevoFullWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    need: "Entretien / réparation",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const serviceOptions = useMemo(
    () => [
      "Entretien / réparation",
      "Diagnostic électronique",
      "Pare-brise",
      "Achat / vente / reprise",
      "Demande de devis",
    ],
    []
  );

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#accueil" className="group">
            <div className="text-2xl md:text-3xl font-black tracking-[0.28em] text-slate-950">CAREVO</div>
            <div className="text-[11px] font-medium text-slate-500 group-hover:text-slate-700 transition">{company.tagline}</div>
          </a>

          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-slate-950 transition">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold hover:bg-slate-50 transition"
            >
              Appeler
            </a>
            <a
              href="#contact"
              className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 transition"
            >
              Demander un devis
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="xl:hidden rounded-2xl border border-slate-300 p-3"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-2 px-5 py-4 md:px-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="accueil" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Pill>Garage auto • Biesles • Haute-Marne</Pill>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl md:leading-[1.02]"
              >
                Un site complet pour un garage
                <span className="block">clair, moderne et crédible.</span>
              </motion.h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                CAREVO présente vos services, rassure les clients, valorise votre image et facilite la prise de contact.
                Ce modèle est pensé pour convertir des visiteurs en demandes de devis.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-xl hover:-translate-y-0.5 transition"
                >
                  Obtenir un devis
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Découvrir les services
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((item) => (
                  <Card key={item.label} className="p-5">
                    <div className="text-lg font-black text-slate-950">{item.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <Card className="p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-950 p-3 text-white">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500">Positionnement</div>
                    <div className="text-xl font-black text-slate-950">Garage premium de proximité</div>
                  </div>
                </div>
                <p className="mt-5 leading-8 text-slate-600">
                  Le site met en avant votre sérieux, votre rapidité et la qualité de votre accompagnement, sans surcharge visuelle.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    "Entretien & mécanique",
                    "Diagnostic électronique",
                    "Pare-brise",
                    "Achat / vente de véhicules",
                  ].map((line) => (
                    <div key={line} className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                      <CircleCheck className="h-4 w-4" />
                      <span className="text-sm font-medium">{line}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid gap-5 md:grid-cols-2">
                <Card className="p-6">
                  <div className="text-sm font-semibold text-slate-500">Contact rapide</div>
                  <div className="mt-3 text-lg font-black">{company.phone}</div>
                  <div className="mt-1 text-sm text-slate-500">Appel direct</div>
                </Card>
                <Card className="p-6">
                  <div className="text-sm font-semibold text-slate-500">Localisation</div>
                  <div className="mt-3 text-lg font-black">{company.address}</div>
                  <div className="mt-1 text-sm text-slate-500">Zone locale de confiance</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionTitle
              eyebrow="Services"
              title="Une présentation complète de l’activité CAREVO"
              text="Chaque bloc service peut ensuite être relié à une vraie page dédiée, à un formulaire de devis ou à un bouton d’appel."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                    <Card className="h-full p-6 md:p-7">
                      <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                      <div className="mt-5 grid gap-2">
                        {service.bullets.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                            <CircleCheck className="h-4 w-4" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="atelier" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle
              eyebrow="Atelier"
              title="Un fonctionnement simple à comprendre pour le client"
              text="Le site doit rassurer. Ici, on montre comment se passe la prise en charge pour lever les freins avant la prise de rendez-vous."
            />

            <div className="grid gap-4">
              {steps.map((step) => (
                <Card key={step.title} className="p-6 md:p-7">
                  <div className="text-xl font-black text-slate-950">{step.title}</div>
                  <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="vehicules" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionTitle
                  eyebrow="Véhicules"
                  title="Acheter, vendre ou faire reprendre son véhicule"
                  text="Cette section aide à capter les clients qui recherchent un accompagnement sérieux pour la vente auto, la reprise ou la recherche de véhicule."
                />
                <div className="mt-8 grid gap-3">
                  {[
                    "Valorisation de la reprise",
                    "Accompagnement sur la vente",
                    "Conseils clairs avant achat",
                    "Approche rassurante et professionnelle",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 border border-slate-200">
                      <BadgeEuro className="h-5 w-5" />
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-7 md:p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Exemple de bloc commercial</div>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950">Vous souhaitez vendre ou changer de véhicule ?</h3>
                <p className="mt-4 leading-8 text-slate-600">
                  CAREVO vous accompagne avec une approche simple : écoute du besoin, estimation, orientation et suivi. Ce contenu est idéal pour créer une page dédiée “achat / vente / reprise”.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#contact" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                    Demander une estimation
                  </a>
                  <a href="#contact" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold">
                    Être rappelé
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="parebrise" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Card className="overflow-hidden p-0">
              <div className="bg-slate-950 p-8 text-white md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  <ShieldCheck className="h-4 w-4" />
                  Service vitrage
                </div>
                <h3 className="mt-5 text-3xl md:text-4xl font-black tracking-tight">Remplacement de pare-brise avec accompagnement client</h3>
                <p className="mt-4 max-w-xl leading-8 text-slate-300">
                  Une section dédiée très utile pour développer ce service, rassurer sur le process et générer des demandes qualifiées.
                </p>
              </div>
              <div className="grid gap-4 p-8 md:grid-cols-2 md:p-10">
                {[
                  "Prise de contact rapide",
                  "Analyse du besoin",
                  "Organisation de l’intervention",
                  "Suivi client clair",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <div>
              <SectionTitle
                eyebrow="Pare-brise"
                title="Une page service qui peut vraiment convertir"
                text="Le site complet doit donner envie d’appeler tout de suite. Cette partie est conçue pour ça : simple, pro, visuelle et orientée demande de contact."
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white">
                  Faire une demande
                </a>
                <a href={`mailto:${company.email}`} className="rounded-2xl border border-slate-300 px-6 py-4 text-sm font-semibold">
                  Envoyer un mail
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="avis" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionTitle
              eyebrow="Avis & confiance"
              title="Un site pro doit aussi rassurer"
              text="Tu pourras remplacer ces avis d’exemple par de vrais retours clients, des avis Google ou des témoignages locaux."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {reviews.map((review) => (
                <Card key={review.name} className="p-6 md:p-7">
                  <div className="flex items-center gap-2 text-slate-950">
                    <CircleCheck className="h-5 w-5" />
                    <span className="font-black">{review.name}</span>
                  </div>
                  <p className="mt-4 leading-8 text-slate-600">“{review.text}”</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Un vrai bloc de conversion"
                text="Le formulaire est prêt visuellement. Il pourra ensuite être relié à un envoi réel par email, à Formspree, Resend, Firebase ou Supabase."
              />

              <div className="mt-8 grid gap-4">
                <Card className="p-5">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="text-sm text-slate-500">Téléphone</div>
                      <div className="font-black text-slate-950">{company.phone}</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <div className="text-sm text-slate-500">Email</div>
                      <div className="font-black text-slate-950">{company.email}</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <div className="text-sm text-slate-500">Adresse</div>
                      <div className="font-black text-slate-950">{company.address}</div>
                    </div>
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5" />
                    <div>
                      <div className="text-sm text-slate-500">Horaires</div>
                      <div className="mt-2 grid gap-1 text-sm font-medium text-slate-800">
                        {company.hours.map((hour) => (
                          <div key={hour}>{hour}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Nom</label>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Téléphone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                      placeholder="Votre email"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Besoin</label>
                    <select
                      value={form.need}
                      onChange={(e) => handleChange("need", e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="mt-2 min-h-[170px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
                    placeholder="Expliquez votre besoin : entretien, panne, pare-brise, vente ou reprise..."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 transition"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Envoyer la demande
                  </button>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contacter par email
                  </a>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler
                  </a>
                </div>

                {sent ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-medium text-emerald-800">
                    Formulaire envoyé en démonstration. La connexion réelle peut être ajoutée ensuite.
                  </div>
                ) : null}
              </form>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-2xl font-black tracking-[0.28em]">CAREVO</div>
            <p className="mt-4 max-w-md leading-8 text-slate-300">
              Site vitrine complet pour présenter le garage, rassurer les clients et générer des demandes de devis. Version finale prête à personnaliser et déployer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/90">
                <Phone className="mr-2 inline h-4 w-4" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/90">
                <Mail className="mr-2 inline h-4 w-4" />
                {company.email}
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Navigation</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="hover:text-white transition">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">Infos utiles</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> {company.address}</div>
              <div className="flex items-start gap-2"><MessageSquare className="mt-0.5 h-4 w-4" /> Formulaire de contact prêt</div>
              <div className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4" /> Site pensé pour la confiance</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
            <div>© {new Date().getFullYear()} CAREVO — {company.tagline}</div>
            <div>Mentions légales • Politique de confidentialité • Cookies • carevo.fr</div>
          </div>
        </div>
      </footer>
    </div>
  );
}