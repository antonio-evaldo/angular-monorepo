import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type variantes = 'primario' | 'secundario' | 'terciario';
type temas = 'azul' | 'violeta';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {

  /**
   * Texto botão
   */
  @Input() texto = '';
  @Input() desabilitado = false;
  @Input() variante: variantes = 'primario';
  @Input() tema: temas = 'azul';

  obterVariante(variante: variantes, desabilitado: boolean, tema: temas): string {
    let classes = `${variante} ${tema}`;

    classes += desabilitado ? " disabled" : "";

    return classes;
  }
}
