// Tipos del cotizador y lista de módulos sin precios.
// Los precios (y la tarifa por hora) solo los conoce devdul-back: llegan de
// GET /quote/catalog. Esta lista sirve para mostrar los módulos mientras carga
// o si la API no responde. Si agregas módulos en el backend, cópialos aquí sin horas.

export type QuoteModule = {
  id: string
  name: string
  description: string
  /** Precio sin IVA. Solo viene de la API. */
  priceMxn?: number
  /** Núcleo de la categoría: se agrega automáticamente. */
  required?: boolean
}

export type QuoteCategory = {
  id: 'crm' | 'saas' | 'erp'
  name: string
  description: string
  modules: QuoteModule[]
}

export const DEFAULT_IVA_RATE = 0.16

export const fallbackCatalog: QuoteCategory[] = [
  {
    id: 'crm',
    name: 'CRM',
    description: 'Gestiona clientes, oportunidades y seguimiento comercial en un solo lugar.',
    modules: [
      { id: 'crm-core', name: 'Núcleo del sistema', description: 'Login, usuarios, roles y permisos, panel principal y despliegue en la nube.', required: true },
      { id: 'crm-contacts', name: 'Contactos y empresas', description: 'Fichas de clientes, empresas, etiquetas, búsqueda y filtros.' },
      { id: 'crm-pipeline', name: 'Embudo de ventas', description: 'Oportunidades en tablero kanban por etapas, montos y probabilidad de cierre.' },
      { id: 'crm-activities', name: 'Actividades y recordatorios', description: 'Tareas, llamadas, reuniones, agenda y avisos de seguimiento.' },
      { id: 'crm-quotes', name: 'Cotizaciones en PDF', description: 'Catálogo de productos, cotizaciones con plantilla de tu marca y envío por correo.' },
      { id: 'crm-email', name: 'Correo integrado', description: 'Envío de correos desde el CRM con plantillas e historial por cliente.' },
      { id: 'crm-whatsapp', name: 'WhatsApp Business', description: 'Conversaciones de WhatsApp ligadas a cada cliente y mensajes con plantilla.' },
      { id: 'crm-campaigns', name: 'Campañas de email marketing', description: 'Segmentos, envíos masivos y métricas de apertura y clics.' },
      { id: 'crm-tickets', name: 'Soporte y tickets', description: 'Mesa de ayuda con estados, prioridades, asignación y tiempos de respuesta.' },
      { id: 'crm-reports', name: 'Reportes y dashboard', description: 'Ventas por vendedor, conversión del embudo y metas en tiempo real.' },
      { id: 'crm-import', name: 'Importar y exportar Excel', description: 'Carga masiva de clientes y exportación de datos a Excel o CSV.' },
      { id: 'crm-mobile', name: 'App móvil para vendedores', description: 'Versión instalable en el celular (PWA) para trabajar en campo.' },
      { id: 'crm-ai-scoring', name: 'IA: calificación de prospectos', description: 'La IA prioriza prospectos y resume el historial de cada cliente.' },
      { id: 'crm-ai-chatbot', name: 'IA: chatbot de atención', description: 'Asistente que responde a clientes 24/7 y registra prospectos en el CRM.' },
    ],
  },
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Tu producto en línea con varias empresas cliente, planes y cobro por suscripción.',
    modules: [
      { id: 'saas-core', name: 'Núcleo multiempresa', description: 'Arquitectura multi-tenant, login, roles, aislamiento de datos y despliegue.', required: true },
      { id: 'saas-onboarding', name: 'Registro y onboarding', description: 'Alta de nuevas empresas, verificación de correo e invitación de usuarios.' },
      { id: 'saas-billing', name: 'Suscripciones y cobros', description: 'Cobro recurrente con Stripe o Mercado Pago, recibos y cambios de plan.' },
      { id: 'saas-plans', name: 'Planes, límites y prueba gratis', description: 'Planes con límites de uso, periodo de prueba y bloqueo por falta de pago.' },
      { id: 'saas-superadmin', name: 'Panel de super administrador', description: 'Vista global de clientes, planes, pagos y soporte.' },
      { id: 'saas-cfdi', name: 'Facturación electrónica CFDI 4.0', description: 'Timbrado de facturas ante el SAT mediante un PAC.' },
      { id: 'saas-notifications', name: 'Notificaciones', description: 'Avisos por correo y dentro de la aplicación.' },
      { id: 'saas-api', name: 'API pública y webhooks', description: 'API documentada con llaves por cliente y eventos webhook.' },
      { id: 'saas-landing', name: 'Sitio de marketing', description: 'Landing page con planes y precios conectada al registro.' },
      { id: 'saas-metrics', name: 'Métricas del negocio', description: 'MRR, cancelaciones, uso por cliente y crecimiento.' },
      { id: 'saas-i18n', name: 'Varios idiomas', description: 'Interfaz en español e inglés (o los idiomas que necesites).' },
      { id: 'saas-auth', name: 'Acceso con Google y 2FA', description: 'Inicio de sesión con Google y verificación en dos pasos.' },
      { id: 'saas-ai-assistant', name: 'IA: asistente integrado', description: 'Asistente que responde preguntas sobre los datos de cada cliente.' },
    ],
  },
  {
    id: 'erp',
    name: 'ERP',
    description: 'Controla inventario, compras, ventas y finanzas de toda tu operación.',
    modules: [
      { id: 'erp-core', name: 'Núcleo del sistema', description: 'Login, usuarios, roles, sucursales, bitácora de cambios y despliegue.', required: true },
      { id: 'erp-inventory', name: 'Inventarios y almacenes', description: 'Existencias por almacén, entradas, salidas, traspasos y lotes.' },
      { id: 'erp-purchases', name: 'Compras y proveedores', description: 'Órdenes de compra, recepción de mercancía y catálogo de proveedores.' },
      { id: 'erp-sales', name: 'Ventas y punto de venta', description: 'Pedidos, remisiones y caja para venta en mostrador.' },
      { id: 'erp-cfdi', name: 'Facturación electrónica CFDI 4.0', description: 'Facturas, notas de crédito y complementos de pago timbrados ante el SAT.' },
      { id: 'erp-receivables', name: 'Cuentas por cobrar y pagar', description: 'Saldos de clientes y proveedores, abonos y antigüedad de saldos.' },
      { id: 'erp-accounting', name: 'Contabilidad', description: 'Catálogo de cuentas SAT, pólizas automáticas y estados financieros.' },
      { id: 'erp-payroll', name: 'Nómina', description: 'Cálculo de nómina, IMSS e ISR y timbrado de recibos.' },
      { id: 'erp-hr', name: 'Recursos humanos', description: 'Expedientes de empleados, vacaciones, incidencias y asistencia.' },
      { id: 'erp-production', name: 'Producción', description: 'Recetas o listas de materiales, órdenes de producción y costos.' },
      { id: 'erp-logistics', name: 'Logística y envíos', description: 'Rutas, entregas, guías y seguimiento de pedidos.' },
      { id: 'erp-reports', name: 'Reportes y BI', description: 'Tableros de ventas, márgenes, inventario y flujo de efectivo.' },
      { id: 'erp-ai-forecast', name: 'IA: pronóstico de demanda', description: 'Predice ventas y sugiere cuándo y cuánto comprar.' },
      { id: 'erp-ai-documents', name: 'IA: lectura de documentos', description: 'Captura automática de facturas y documentos de proveedores.' },
    ],
  },
]
