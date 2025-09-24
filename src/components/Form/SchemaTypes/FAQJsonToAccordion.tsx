import React, { useState, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonToAccordionProps {
  // Props placeholder para futura funcionalidad
}

export const FAQJsonToAccordion: React.FC<FAQJsonToAccordionProps> = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [htmlOutput, setHtmlOutput] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  // Función para generar número base aleatorio que empiece con 4 y termine en 0
  const generateBaseUUID = (): number => {
    // Generar 4 dígitos aleatorios para el medio (xxxx)
    const middleDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    // Combinar: 4 + 4 dígitos aleatorios + 0
    return parseInt(`4${middleDigits}0`);
  };

  // Función para generar IDs únicos basados en el texto
  const generateId = (text: string, index: number): string => {
    const cleanText = text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '')
      .substring(0, 15);
    return cleanText + index;
  };

  // Función para parsear el JSON-LD y extraer las FAQs
  const parseJsonLD = (input: string): FAQItem[] => {
    try {
      // Limpiar el input removiendo etiquetas script si las tiene
      let cleanInput = input.trim();
      if (cleanInput.includes('<script')) {
        const startTag = cleanInput.indexOf('>') + 1;
        const endTag = cleanInput.lastIndexOf('</script>');
        cleanInput = cleanInput.substring(startTag, endTag);
      }

      const jsonData = JSON.parse(cleanInput);
      
      // Verificar que sea un FAQPage schema
      if (jsonData['@type'] !== 'FAQPage') {
        throw new Error('El JSON no es un schema de tipo FAQPage');
      }

      // Extraer las preguntas y respuestas
      const mainEntity = jsonData.mainEntity || [];
      const faqItems: FAQItem[] = [];

      mainEntity.forEach((entity: any) => {
        if (entity['@type'] === 'Question' && entity.name && entity.acceptedAnswer?.text) {
          faqItems.push({
            question: entity.name,
            answer: entity.acceptedAnswer.text
          });
        }
      });

      return faqItems;
    } catch (err) {
      throw new Error('Error al parsear el JSON: ' + (err instanceof Error ? err.message : 'Formato inválido'));
    }
  };

  // Función para generar el HTML del acordeón
  const generateAccordionHTML = (faqItems: FAQItem[], titleText: string): string => {
    if (faqItems.length === 0) {
      return "<!-- No hay preguntas válidas para generar acordeón -->";
    }

    // Generar número base aleatorio una sola vez
    const baseUUID = generateBaseUUID();

    const accordionItems = faqItems.map((item, index) => {
      // UUID secuencial a partir del número base
      const uuid = baseUUID + index;
      const id = generateId(item.question, index);
      
      return `    <!-- wp:pb/accordion-item {"titleTag":"h3","uuid":${uuid}} -->
    <div class="wp-block-pb-accordion-item c-accordion__item js-accordion-item no-js" data-initially-open="false"
        data-click-to-close="true" data-auto-close="true" data-scroll="false" data-scroll-offset="0"
        id="${id}">
        <h3 id="at-${uuid}" class="c-accordion__title js-accordion-controller" role="button">${index + 1}. ${item.question}</h3>
        <div id="ac-${uuid}" class="c-accordion__content"><!-- wp:paragraph -->
            <p>${item.answer}</p>
            <!-- /wp:paragraph -->
        </div>
    </div>
    <!-- /wp:pb/accordion-item -->`;
    }).join('\n\n');

    return `<!-- wp:group {"className":"br-0111","backgroundColor":"alt","layout":{"type":"constrained"},"verticalSpacingTop":"sm","verticalSpacingBottom":"sm","verticalSpacingLeft":"sm","verticalSpacingRight":"sm"} -->
<div class="wp-block-group br-0111 has-alt-background-color has-background"><!-- wp:heading -->
    <h2 class="wp-block-heading"><strong>${titleText}</strong></h2>
    <!-- /wp:heading -->

    <!-- wp:spacer {"height":"20px"} -->
    <div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
    <!-- /wp:spacer -->

${accordionItems}
</div>
<!-- /wp:group -->`;
  };

  // useEffect para generar automáticamente cuando cambien los inputs
  useEffect(() => {
    if (!jsonInput.trim()) {
      setError("");
      setHtmlOutput("");
      return;
    }

    try {
      setError("");
      const faqItems = parseJsonLD(jsonInput);
      
      if (faqItems.length === 0) {
        setError("No se encontraron preguntas válidas en el JSON-LD");
        setHtmlOutput("");
        return;
      }

      const htmlResult = generateAccordionHTML(faqItems, title);
      setHtmlOutput(htmlResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      setHtmlOutput("");
    }
  }, [jsonInput, title]);

  // Función para copiar al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlOutput);
  };

  return (
    <div className="faq-json-to-accordion">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3">De JSON-LD a Acordeón</h3>
        <p className="text-gray-600 text-sm mb-4">
          Pega el código JSON-LD de FAQ Schema para convertirlo a acordeón (formato Mai Theme de WordPress).
        </p>
      </div>

      <div className="inputForm__div">
        <label htmlFor="accordionTitle">Título del acordeón:</label>
        <input
          className="w-full"
          type="text"
          id="accordionTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Preguntas frecuentes sobre..."
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="jsonInput">JSON-LD Schema FAQ:</label>
        <textarea
          className="w-full"
          id="jsonInput"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Pega aquí las FAQ en formato JSON-LD'
          rows={8}
        />
      </div>



      {error && (
        <div className="error-message p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {htmlOutput && (
        <div className="output-section">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">HTML Generado para WordPress:</h4>
            <button
              type="button"
              onClick={copyToClipboard}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
            >
              Copiar HTML
            </button>
          </div>
          <textarea
            className="w-full"
            value={htmlOutput}
            readOnly
            rows={15}
            style={{ fontSize: '12px', fontFamily: 'monospace' }}
          />
        </div>
      )}
    </div>
  );
};