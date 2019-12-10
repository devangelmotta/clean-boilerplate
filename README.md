

## Documentation

#Estructura del proyecto.

El proyecto de divide en Componentes y Contenedores. Los componentes son elementos genéricos y agnósticos, mientras que los contenedores se ocupan de peticiones a la red y tratamientos con datos. Tiene múltiples ventajas como parte de una arquitectura TDD. 

En este proyecto he intentado mostrar las cualidades de esto creando componentes totalmente escalables y reusables. Por ejemplo, el proyecto usa un solo componente de texto, botón, input, row y column, totalmente configurables para casos de uso.

Como gusto personal, al modelo Componente/Contenedor me gusta añadir secciones a los contenedores. 
Hay dos razones que considero de importancia para esto:
1. Si los componentes son totalmente agnósticos (como se ven acá), algunas configuraciones complejas de componentes conlleva a crear nuevos componentes que son una configuración de componentes ya creados.
2. La creación de esos nuevos componentes, muy a menudo específicos, desprovecha la capacidad de tener componentes reusables y escalables pues se podría llegar a tener cientos de componentes de uso específico, desordenando y desaprovechando escalabilidad. 

Esto lo solucionan las secciones, que no es más que una modularización del Contenedor contenida en el propio contenedor.

Hay componentes en la práctica iguales, tal como row y column. Esta división es simplemente por legibilidad. Row y Column ayuda a entender la forma en que se ordena el código, de la misma forma Button, que es en la práctica un simple componente Row.

#Internacionalización.

Contiene una funcionalidad pequeña pero altamente escalable de soporte de idiomas.

Contiene una pequeña CLI de template para crear Componentes/Contenedores fuertemente opinados. Sin embargo presenta algunos errores por una implementación de imágenes CSV que no salió bien.

#Herramientas. 
Principalmente: 

- Redux,
- Saga,
- Selector (economiza memoria)
- styled-components,
- intl8 (soporte de idiomas)

Se usó ContextProvider para transmitirle métodos a los componentes. Un ejemplo específico está en el componente FormGroup. De esa forma se consiguió crear un componente de formulario totalmente dinámico y escalable, solo agregas un campo input y te olvidas de cómo recoge los datos, solo require nombre y, si se quiere, type.

El proyecto tiene detalles que me gustaría arreglar, pero lamentablemente no gozo del tiempo ahora mismo.

#Correr en local

- Clone el proyecto
- Ingrese al directorio raíz
- Ejecute en la terminal: yarn
- Una vez terminada la descarga de dependencias ejecute: yarn start.
- Revise el package.json para conocer todos los comandos.

