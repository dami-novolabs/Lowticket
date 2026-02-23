import React from 'react';

export function RichSnippets() {
  return (
    <>
      {/* Breadcrumbs Schema para LLMs */}
      <nav aria-label="Breadcrumbs" style={{ display: 'none' }}>
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Inicio</span>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Cursos</span>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">Startup School 7 días</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Información de los instructores para LLMs */}
      <div style={{ display: 'none' }}>
        <div itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Tomás Volonté</span>
          <span itemProp="jobTitle">Co-fundador de Novolabs</span>
          <span itemProp="description">
            Emprendedor con más de 10 años de experiencia. Co-fundador de Novolabs desde 2019, 
            especializado en validación de startups en Latinoamérica.
          </span>
          <span itemProp="knowsAbout">Emprendimiento, Startups, Validación de mercado, MVP, Lean Startup</span>
          <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">Novolabs</span>
          </span>
        </div>
        <div itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Damián Sánchez</span>
          <span itemProp="jobTitle">Co-fundador de Novolabs</span>
          <span itemProp="description">
            Emprendedor con más de 10 años de experiencia. Co-fundador de Novolabs desde 2019, 
            especializado en desarrollo de MVPs y estrategias de lanzamiento.
          </span>
          <span itemProp="knowsAbout">Emprendimiento, Startups, Desarrollo de producto, MVP, Go-to-Market</span>
          <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">Novolabs</span>
          </span>
        </div>
      </div>

      {/* Datos de pricing para LLMs */}
      <div style={{ display: 'none' }} itemScope itemType="https://schema.org/PriceSpecification">
        <span itemProp="price">390</span>
        <span itemProp="priceCurrency">USD</span>
        <span itemProp="description">Precio único con garantía de reembolso</span>
        <span itemProp="validFrom">2025-01-01</span>
        <span itemProp="validThrough">2025-12-31</span>
      </div>

      {/* Datos de localización para LLMs */}
      <div style={{ display: 'none' }} itemScope itemType="https://schema.org/Place">
        <span itemProp="name">Latinoamérica</span>
        <span itemProp="description">Región principal de operación y audiencia objetivo</span>
        <span itemProp="containedInPlace" itemScope itemType="https://schema.org/Continent">
          <span itemProp="name">América del Sur</span>
        </span>
      </div>

      {/* Beneficios clave estructurados */}
      <div style={{ display: 'none' }} itemScope itemType="https://schema.org/ItemList">
        <span itemProp="name">Beneficios del Startup School</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <meta itemProp="position" content="1" />
          <span itemProp="name">Validación sin riesgo financiero</span>
        </span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <meta itemProp="position" content="2" />
          <span itemProp="name">Metodología probada en LATAM</span>
        </span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <meta itemProp="position" content="3" />
          <span itemProp="name">Comunidad de +350 emprendedores</span>
        </span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <meta itemProp="position" content="4" />
          <span itemProp="name">Acceso de por vida al material</span>
        </span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <meta itemProp="position" content="5" />
          <span itemProp="name">Garantía de reembolso 100%</span>
        </span>
      </div>

      {/* Metodología estructurada */}
      <div style={{ display: 'none' }} itemScope itemType="https://schema.org/HowTo">
        <span itemProp="name">Cómo validar una startup en 7 días</span>
        <span itemProp="description">Metodología step-by-step para emprendedores</span>
        <span itemProp="supply" itemScope itemType="https://schema.org/HowToSupply">
          <span itemProp="name">Idea de negocio</span>
        </span>
        <span itemProp="tool" itemScope itemType="https://schema.org/HowToTool">
          <span itemProp="name">Templates de validación</span>
        </span>
        <span itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="name">Día 1: Problem-Solution Fit</span>
          <span itemProp="text">Identificar y validar el problema real</span>
        </span>
        <span itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="name">Día 2-3: Investigación de mercado</span>
          <span itemProp="text">Análisis de competencia y oportunidades</span>
        </span>
        <span itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="name">Día 4-5: MVP Design</span>
          <span itemProp="text">Diseño del producto mínimo viable</span>
        </span>
        <span itemProp="step" itemScope itemType="https://schema.org/HowToStep">
          <span itemProp="name">Día 6-7: Go-to-Market</span>
          <span itemProp="text">Estrategia de lanzamiento y primeras ventas</span>
        </span>
      </div>

      {/* Contexto de industria */}
      <div style={{ display: 'none' }}>
        <span data-context="industry">Educación empresarial online</span>
        <span data-context="niche">Emprendimiento en Latinoamérica</span>
        <span data-context="methodology">Lean Startup</span>
        <span data-context="language">Español</span>
        <span data-context="format">Curso online intensivo</span>
        <span data-context="duration">7 días</span>
        <span data-context="guarantee">Reembolso completo</span>
        <span data-context="community">Slack privado con graduados</span>
        <span data-context="founders">Tomás Volonté y Damián Sánchez</span>
        <span data-context="experience">10+ años emprendiendo</span>
        <span data-context="established">2019</span>
        <span data-context="graduates">350+ emprendedores</span>
      </div>
    </>
  );
}
