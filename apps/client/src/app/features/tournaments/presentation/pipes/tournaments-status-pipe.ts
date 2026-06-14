import { Pipe, PipeTransform } from '@angular/core'
import { Tournament } from '../../domain/model/tournament.model'

@Pipe({
  name: 'tournamentsStatus'
})
export class TournamentsStatusPipe implements PipeTransform {

  transform(tournament: Tournament): unknown {
      if (tournament.isActive()) return 'Activo'
      if (tournament.isFinished()) return 'Finalizado'
      if (tournament.isUpcoming()) return 'Próximo'
      return 'Inactivo'
  }

}
