import React from 'react';
import { Card } from './ui/card';
import { Shield, CheckCircle, RefreshCw } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">


        <Card className="bg-gradient-to-br from-novo-secondary/10 to-novo-primary/10 border-novo-secondary/20 p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <Shield className="w-full h-full text-novo-secondary" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="hidden sm:flex w-20 h-20 bg-novo-secondary/20 rounded-full items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-novo-secondary" />
            </div>

            <h3 className="thunder-font text-2xl md:text-3xl text-novo-white mb-6">
              {'GARANTÍA SIN LETRA CHICA'}
            </h3>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg text-novo-grey leading-relaxed">
                {'Si después de completar todos los módulos y entregables del curso, no obtuviste una idea clara + un nicho claro + un experimento ejecutable, te devolvemos tu inversión.'}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8 justify-center max-w-3xl mx-auto">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-novo-secondary mx-auto mb-3" />
                  <div className="text-novo-white font-semibold mb-2">{'Devolución del 100%'}</div>
                </div>
                
                <div className="text-center">
                  <RefreshCw className="w-8 h-8 text-novo-secondary mx-auto mb-3" />
                  <div className="text-novo-white font-semibold mb-2">{'Reembolso en 48hs máximo'}</div>
                </div>
                
                <div className="text-center">
                  <Shield className="w-8 h-8 text-novo-secondary mx-auto mb-3" />
                  <div className="text-novo-white font-semibold mb-2">{'Riesgo: nuestro. Ejecución: tuya.'}</div>
                </div>
              </div>

              <p className="text-novo-grey text-sm text-center mt-4">{'6 años ayudando emprendedores'}</p>
            </div>

            {/* Guarantee Seal */}

          </div>
        </Card>

        {/* Additional Trust Elements */}

      </div>
    </section>
  );
}
