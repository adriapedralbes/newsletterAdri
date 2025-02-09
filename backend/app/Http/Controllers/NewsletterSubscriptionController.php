<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscription;
use Illuminate\Http\Request;

class NewsletterSubscriptionController extends Controller
{
    /**
     * Guarda una nueva suscripción en la base de datos.
     */
    public function store(Request $request)
    {
        // Valida la entrada. El campo consent se espera que esté "aceptado"
        $data = $request->validate([
            'email'   => 'required|email|unique:newsletter_subscriptions,email',
            // La regla "accepted" se asegura de que el checkbox esté marcado.
            'consent' => 'required|accepted',
        ]);

        // Crea la suscripción
        $subscription = NewsletterSubscription::create($data);

        return response()->json([
            'message' => 'Subscription successful',
            'data'    => $subscription
        ], 201);
    }
}
