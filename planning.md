- Task

Una clase que tendrá todos los elementos de una tarea: Título, fecha límite y prioridad, así como anotaciones por si se necesitara dar más contexto. Tendrá botón de edición, eliminación y un switch para indicar si la tarea está terminada o no.

- Modal (para tareas)

Formulario que servirá tanto en la creación como edición de las tareas. Tendrá inputs para el título, fecha límite y radios para indicar su prioridad, así como el apartado de anotaciones. Al crear una tarea, se abrirá vacío; al editar una tarea, se recogerán los datos de esa tarea y se pondrán en su sitio correspondiente para poder ser editados. Tendrá un botón de cancelar y un botón de finalizar. El botón de cancelar cerrará la modal; el botón de finalizar mandará los datos a donde corresponda.

- Modal (para proyectos)

Formulario que tendrá dos inputs: Título y anotaciones para describir el proyecto en caso de que sea necesario. Más adelante se buscará la manera de poder editar ambos en caso de que sea necesario.

- Project 

Una clase que se encargará de todo lo que tenga que ver con las tareas: Crearlas, almacenarlas, editarlas, borrarlas de su almacenamiento y de la UI. Cada proyecto almacenará sus tareas. Habrá que buscar una manera de flaggear cuál es el proyecto activo para que se creen las tareas dentro de él.