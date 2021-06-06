<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["datosGrafica", "nombresProductos", "label"],
  mounted() {    
    let dataRender = {
        labels: this.nombresProductos,
        datasets: [
          {
            label: this.label,
            data: this.datosGrafica,
            backgroundColor: "rgba(1, 116, 188, 0.50)",
            borderColor: "rgba(1, 116, 188, 0.50)",
          }
        ]
      }
    this.renderChart(
      dataRender
      ,
      {
        responsive: true,
        maintainAspectRatio: true,
      }
    );
  }
};
</script>